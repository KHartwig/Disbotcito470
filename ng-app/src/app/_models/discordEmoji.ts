export class DiscordEmoji {
  id: string;                 // Discord id
  name: string;               // Name of the emoji
  url: string;                // Public url where emoji is located
  requiresColons: boolean;    // True if emoji requires colons surrounding name
  createdAt: Date;            // When emoji was created
}
