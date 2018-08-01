import { Action } from ".";
export class Command {
  id: number;
  name: string;
  Actions: Action[] = [];
  createdAt: Date;
  updatedAt: Date;
  //Local variables
  nameEditing: boolean;
}
