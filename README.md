Overview:
Each registered user can create bots. A user can add multiple "commands" to each bot, which are denoted by a prefix followed by a string (e.g. "!help"). Each of these commands will trigger one or more "actions", each having a "type" and optional parameters.

User registration and login are functional. Most of the CRUD operations are working for bots, commands, and actions. You can add, retrieve, update, and delete most of these items, barring a few (e.g. cannot add new parameters to actions, only edit existing ones). Each bot can also be brought online/offline on its overview page. We have yet to connect our abstraction to the DiscordJS API, so currently our data functions as templates for the bots and their functionality. 

To run the app:
1. Run `vagrant up`
2. Go to http://localhost:8080
3. You can register or use these credentials - [username]: dalton, [password]: password