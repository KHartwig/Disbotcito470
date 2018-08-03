import { DiscordUser} from ".";
export class DiscordMember {
  id: string;                              // string - discord id
  user: DiscordUser;                       // User - user representing this guild member
  nickname: string;                       // string - nickname in the guild
  displayName: string;                    // string - nickname, if null then username
  joinedAt: Date;                        // date - when user became a member of the guild
}
