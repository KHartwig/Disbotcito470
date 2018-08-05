import { Command } from ".";
export class Bot {
  id: number;
  name: string;
  discordToken: string;
  status: string;
  OwnerId: number;
  commandPrefix: string;
  Commands: Command[] = [];
  createdAt: Date;
  updatedAt: Date;

  // local variables
  isChangingStatus: boolean = false;
}
