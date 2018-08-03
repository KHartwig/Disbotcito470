import { DiscordMember,DiscordEmoji } from ".";
export class DiscordGuild {
  id: string;                               // string - discord id
  name: string;                          // string - name of the guild
  iconURL: string;                     // string - url to guild's icon
  owner: string;             // string - Username of the owner user
  ownerID: string;                    // string - ID of the owner user
  memberCount: number;            // number - Number of members in the guild
  members: DiscordMember[]=[];
  emojis: DiscordEmoji[]=[];
  region: string;                       // string - Region where guild is hosted
  available: boolean;
}
