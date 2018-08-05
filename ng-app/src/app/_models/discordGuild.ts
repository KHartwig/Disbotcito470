import { DiscordUser, DiscordMember, DiscordEmoji } from ".";
export class DiscordGuild {
  id: string;                     // discord id
  name: string;                   // name of the guild
  iconURL: string;                // url to guild's icon
  owner: DiscordUser;             // User of the owner user
  ownerID: string;                // ID of the owner user
  memberCount: number;            // number - Number of members in the guild
  members: DiscordMember[]=[];    // List of members in the guild
  emojis: DiscordEmoji[]=[];      // List of emojis the guild has
  region: string;                 // Region where guild is hosted
  available: boolean;             // Whether the guild is available - false indicates server outage
}
