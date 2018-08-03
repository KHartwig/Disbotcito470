export class DiscordUser {
  id: number;
  username: string;                   // string - username of the user
  tag: string;                       // string - discord tag of the user
  avatarURL: string;                 // string - url to the avatar pic/gif
  status: string;       // string - 'online', 'offline', 'idle', 'dnd' - DoNotDisturb
  createdAt: Date;           // date - when the user was created
  bot: boolean;
}
