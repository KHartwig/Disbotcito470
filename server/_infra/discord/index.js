const Discord = require('discord.js');

class ClientWrapper {

    constructor(botToken, commandPrefix, commands)
    {
        this.botToken = botToken;
        this.commandPrefix = commandPrefix;
        this.commands = commands;
        //console.log("Commands: " + JSON.stringify(commands));

        this.client = new Discord.Client();
        this.client.login(this.botToken);
        this.client.on('message', async message => this.handleMessage(message));
    }

    handleMessage(message)
    {
        console.log("Handling message...");
        if (message.author.bot)
            return;

        const cmdName = message.content.split(' ')[0];
        console.log("Command: " + cmdName);
        console.log("Command name: " + cmdName.substr(this.commandPrefix.length));
        for (let i=0; i < this.commands.length; ++i)
        {
            const command = this.commands[i];
            //console.log("Comparing against " + JSON.stringify(command));
            if (!(message.content.startsWith(this.commandPrefix) && cmdName.substr(this.commandPrefix.length) === command.name))
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
                        this.messageChannel(action, message);
                        break;
                    case 'msgDirect':
                        this.messageDirect(action, message);
                        break;
                    case 'playAudio':

                        break;
                    case 'slots':
                        
                        break;
                    default:
                        message.reply('Error, invalid action type "' + action.type + '"');
                        break;
                }
            }
        }
    }

    messageChannel(action, message)
    {
        for (let gid=0; gid < this.client.guilds.array().length; ++gid)
        {
            const guild = this.client.guilds.array()[gid];
            console.log("Guild name: " + guild.name);
            if (guild === message.guild && guild.available)
            {
                message.reply(action.parameters[0]);
            }
        }
    }

    messageDirect(action, message)
    {
        message.author.send(action.parameters[0]);
    }

    destroy()
    {
        this.client.destroy();
        this.commands = [];
    }
}

module.exports = ClientWrapper;
