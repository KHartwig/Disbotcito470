const Discord = require('discord.js');
const ytdl = require('ytdl-core');

class ClientWrapper {

    constructor(botToken, commandPrefix, commands)
    {
        //disbotcito stuff
        this.botToken = botToken;
        this.commandPrefix = commandPrefix;
        this.commands = commands ? commands : [];
        console.log("> Commands: " + JSON.stringify(commands));

        //discord stuff
        this.natureEmojis = ["four_leaf_clover", "full_moon", "thunder_cloud_rain", "cloud_tornado", "mushroom"];
        this.numberEmojis = ["seven", "one", "two", "three", "four", "five", "six", "eight", "nine"];
        this.isSendingAudio = false;
        this.isReady = false;

        this.client = new Discord.Client();

        this.client.on('message', async message => this.handleMessage(message));
        this.client.on('ready', () => {
            this.isReady = true;
            console.log("Discord client ready");
        });
        this.client.on('disconnect', () => {
            this.isReady = false;
            console.log("Discord client disconnected");
        });
    }

    async login()
    {
        await this.client.login(this.botToken);
    }

    syncCommands(commands)
    {
        this.commands = commands;
        console.log('> Synced new commands: ' + JSON.stringify(commands));
    }

    syncCommandPrefix(prefix)
    {
        this.commandPrefix = prefix;
        console.log('> New command prefix: ' + prefix);
    }

    isOnline()
    {
        if (!this.isReady)
            return false;
        console.log('-- Client status: ' + this.client.user.presence.status);
        return this.client.user.presence.status === 'online';
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
                        this.playAudio(message, 'youtube', action.parameters[0]); //only support youtube URL for now
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
            message.reply(messageContents).catch(err => {
                console.log("Error when sending message in guild - " + err.message)
            });
        }
    }

    //param1: messageToSend
    messageDirect(message, messageContents)
    {
        message.author.send(messageContents).catch(err => {
            console.log("Error when sending direct message to " + message.author.username + " - " + err.message)
        });
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

        let firstEmoji = '';
        let result = '';
        for (let i=0; i < emojiCount; ++i)
        {
            let currEmoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];
            if (emojiCategory !== 'server')
                currEmoji = ':' + currEmoji + ':';
            if (i === 0) //store first emoji for comparison
                firstEmoji = currEmoji;
            else if (currEmoji !== firstEmoji) //not first emoji, so compare and see if it matches
                didWin = false;

            result += currEmoji;
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
        this.client.destroy().catch(err => {
            console.log('Error destroying client: ' + err.message);
        });
        this.commands = [];
    }
}

module.exports = ClientWrapper;
