const Discord = require('discord.js');
const ytdl = require('ytdl-core');

class ClientWrapper {

    constructor(botToken, commandPrefix, commands)
    {
        //disbotcito stuff
        this.botToken = botToken;
        this.commandPrefix = commandPrefix;
        this.commands = commands;
        //console.log("Commands: " + JSON.stringify(commands));

        //discord stuff
        this.natureEmojis = ["four_leaf_clover", "full_moon", "thunder_cloud_rain", "cloud_tornado", "mushroom"];
        this.numberEmojis = ["seven", "one", "two", "three", "four", "five", "six", "eight", "nine"];
        this.isSendingAudio = false;

        this.client = new Discord.Client();
        this.client.login(this.botToken);
        this.client.on('message', async message => this.handleMessage(message));
    }

    sync(commands)
    {
        this.commands = commands;
    }

    handleMessage(message)
    {
        if (message.author.bot || !message.content.startsWith(this.commandPrefix)) //ignore messages from bots
            return;
        console.log("\nHandling message...");

        const cmdName = message.content.split(' ')[0];
        console.log("Command: " + cmdName);
        for (let i=0; i < this.commands.length; ++i)
        {
            const command = this.commands[i];
            if (cmdName.substr(this.commandPrefix.length) !== command.name)
                continue;

            console.log("Found command '" + command.name + "'");
            for (let j=0; j < command.Actions.length; ++j)
            {
                const action = command.Actions[j];
                console.log("Action: " + JSON.stringify(action));
                console.log("Action type: " + action.type);
                switch (action.type)
                {
                    case 'msgChannel':
                        this.messageChannel(message, action.parameters[0]);
                        break;
                    case 'msgDirect':
                        this.messageDirect(message, action.parameters[0]);
                        break;
                    case 'playAudio':
                        this.playAudio(message, action.parameters[0], action.parameters[1]);
                        break;
                    case 'slots':
                        this.rollSlots(message, action.parameters[0], action.parameters[1]);
                        break;
                    default:
                        message.reply('Error, invalid action type "' + action.type + '"');
                        break;
                }
            }
        }
    }

    //param1: messageToSend
    messageChannel(message, messageContents)
    {
        if (message.guild.available)
        {
            console.log("Sending message in guild " + message.guild.name);
            message.reply(messageContents);
        }
    }

    //param1: messageToSend
    messageDirect(message, messageContents)
    {
        message.author.send(messageContents);
    }

    //param1: number of emojis to roll
    //param2: category of the emoji
    rollSlots(message, emojiCount, emojiCategory)
    {
        let didWin = true;
        let winMessage = 'Congratulations, you won!';
        let loseMessage = 'Sorry, please try again!';
        let emojiArr = [];
        switch (emojiCategory)
        {
            case 'nature':
                emojiArr = this.natureEmojis;
                break;
            case 'server':
                emojiArr = message.guild.emojis.array();
                break;
            case 'number':
            default:
                emojiArr = this.numberEmojis;
                break;
        }
        console.log("> Slots - emojiCategory: " + emojiCategory);
        console.log("> Guild emojis - " + message.guild.emojis.map(e=>e.toString()).join(" "));

        let result = '';
        for (let i=0; i < emojiCount; ++i)
        {
            const currEmoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];
            if (i > 0 && currEmoji !== emojiArr[i-1])
                didWin = false;
            result += ':' + currEmoji + ':';//message.guild.emojis.find("name", currEmoji);
        }

        let response = '\n-  SLOTS  -\n========\n' + result + '\n========\n';
        response += didWin ? winMessage : loseMessage;
        console.log("> Slots - result: " + result);
        this.messageChannel(message, response);
    }

    //param1: location type (local or youtube)
    //param2: link to audio
    playAudio(message, type, audioUrl)
    {
        const voiceChannel = message.member.voiceChannel;
        if (voiceChannel)
        {
            if (this.isSendingAudio)
            {
                this.messageChannel(message, "I'm playing audio already! Please wait and try again.");
            }
            else
            {
                voiceChannel.join().then(connection => {
                    try
                    {
                        this.isSendingAudio = true;
                        if (type === "local")
                        {
                            const dispatcher = connection.playFile(audioUrl);
                            dispatcher.on("end", end => {
                                this.isSendingAudio = false;
                                console.log("Finished playing audio file " + audioUrl);
                                voiceChannel.leave();
                            });
                        }
                        else if (type === "youtube")
                        {
                            const streamOptions = { seek: 0, volume: 1 };
                            const stream = ytdl(audioUrl, { filter : 'audioonly' });
                            const dispatcher = connection.playStream(stream, streamOptions);
                            dispatcher.on("end", end => {
                                this.isSendingAudio = false;
                                console.log("Finished playing audio stream " + audioUrl);
                                voiceChannel.leave();
                            });
                        }
                    } catch (ex)
                    {
                        console.log("Unknown exception occurred when trying to play audio file: " + ex.message);
                        this.isSendingAudio = false;
                    }
                }).catch(err => {
                    console.log("Error occurred while joining voice channel: " + err);
                    voiceChannel.leave();
                });
            }
        }
        else
            this.messageChannel(message, "Sorry, you have to join a voice channel first!");
    }

    destroy()
    {
        this.client.destroy();
        this.commands = [];
    }
}

module.exports = ClientWrapper;
