import { Command, DiscordUser } from ".";
export class Bot {
  id: number;
  name: string;
  discordToken: string;
  status: string;
  OwnerId: number;
  commandPrefix: string;
  user: DiscordUser;
  Commands: Command[] = [];
  createdAt: Date;
  updatedAt: Date;

  // local variables
  isChangingStatus: boolean = false;
}
