![alt text][logo]
 
[logo]: https://csil-git1.cs.surrey.sfu.ca/wujasonw/disbotcito/raw/master/ng-app/src/assets/images/DisBotCito.png "DisBotCito Logo"


#### Overview

Discord is a VoIP and instant messaging application. 
For more information about Discord see [here](https://en.wikipedia.org/wiki/Discord_(software)) . 

DisBotCito is web application for non-programmers to manage and create discord bots.

#### Features

1. Login and user account functionality
2. Manage bots’ functionality with:
  * Ability to start and stop Discord Bots linked through Discord’s API tokens
	This will login or logout the Bots
  * Define Bots functionality though managing a list of commands and resulting actions. 
        - Commands are the interface for guild members to interact with the bots. They are invoked when a guild member sends a message in a text channel consisting of a special command prefix followed by the command’s name (e.g. $help). A command can have multiple Actions.
        - An Action is an operation that follows a Command’s invocation. We currently provide four types of Actions:
    	  * `Message Direct` : sends a direct message to the command’s invoker
    	  * `Message Channel` : responds to the command in its respective text channel
    	  * `Play Audio VoiceChannel` : joins the command invoker’s voice channel and plays audio
    	  * `Slots` : runs a slot machine minigame and responds with the results in the text channel  
  * Behaviour of each Action type can be modified with user specified parameters.
      * Initialize and terminate bots
      * Manage bots profile
3. Allow user to access information on the guilds that the bot is a member of
  * The list of guilds is displayed on the bot details page
  * Guild details such as the list of member and list of emojis can also be viewed

#### How to test
To run the app:
1. Run `vagrant up`
2. Go to http://localhost:8080
3. At the app login page please log in with the following credentials:
  * Username: ggbaker
  * Password: cmpt470

At the home screen, there will be two bots available to test in the ‘ggbaker’ account.

For testing please log in to our test discord account [here](https://discordapp.com/channels/468955419688042517/475718629590171649) with these credentials: 
* Email: wujasoncc@gmail.com
* Password: cmpt470

On the right-hand side of the Discord interface, you will see a list of online and offline users, including the two bots premade on the ggbaker DisBotCito Account. These were already added to our test guild `DisBotCito`, which is displayed on the left-hand side of the Discord interface.

‘Angular Bot’ is preloaded with some commands for testing, they can be invoked by typing into the text channel the following messages:
* $pizza
* $slots
* $music

‘React Bot’ has no commands but you can add them by clicking ‘Details’ under the bot’s name, and then ‘Edit’ on the bottom of the Bot’s details page. Any commands and actions that are created here can be invoked after clicking ‘Save’ at the bottom of the edit page.

You can access the guild data from both of these bots through the details page.

Finally, you can add a bot at the home page by clicking the Create Bot link. Enter this discord token: `NDc1OTAyNzMxNTgwNzM1NDk5.Dkly-w.QOO6dwJ9sR3-0VAHu07dnHz35Sk`. These tokens are generated with [discord’s developer portal](https://discordapp.com/developers/applications/).
The bot’s profile (i.e. username and avatarUrl) is also managed at the developer portal.
