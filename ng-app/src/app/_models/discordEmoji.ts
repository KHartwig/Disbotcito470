export class DiscordEmoji {
  id: string;                                // string - discord id
  name: string;                             // string - name of the emoji
  url: string;                             // string - url where emoji is found
  requiresColons: boolean;               // bool -  true if emoji requires colons surrounding name
  createdAt: Date;                     // date - when emoji was created
}
