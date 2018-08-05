import { DiscordUser} from ".";
export class DiscordMember {
  id: string;                   // Discord id
  user: DiscordUser;            // User representing this guild member
  nickname: string;             // Nickname in the guild
  displayName: string;          // Same as nickname, if no nickname then username
  joinedAt: Date;               // When user became a member of the guild
}
