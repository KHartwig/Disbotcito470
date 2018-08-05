export class DiscordUser {
  id: number;               // Discord id
  username: string;         // Username of the user
  tag: string;              // Discord tag of the user
  avatarURL: string;        // Url to the avatar pic/gif
  status: string;           // 'online', 'offline', 'idle', or 'dnd' - DoNotDisturb
  createdAt: Date;          // When the user was created
  bot: boolean;             // True if user is a bot
}
