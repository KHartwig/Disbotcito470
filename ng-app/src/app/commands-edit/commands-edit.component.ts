import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { ActionsEditComponent } from '../actions-edit/actions-edit.component';
import { CommandService, AlertService } from '../_services';
import { Command, Action } from '../_models';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-commands-edit',
  templateUrl: './commands-edit.component.html',
  styleUrls: ['./commands-edit.component.css']
})
export class CommandsEditComponent implements OnInit {
  @ViewChildren(ActionsEditComponent) actionListEditors !: QueryList<ActionsEditComponent>;
  @Input() botId: string;
  commandList : Command[] = [];
  editedCommandList : Command[] = [];

  constructor(private commandService: CommandService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loadCommandsFromServer();
  }

  private createCommand() {
    let cmd = new Command();
    cmd.nameEditing = true;
    this.editedCommandList.push(cmd);
  }

  private deleteCommand(index) {
    this.editedCommandList.splice(index, 1);
  }

  // Stores a deep copy of the actions passed in
  resetEditedCommands() {
    this.editedCommandList = this.commandList.map(x => Object.assign({}, x));
  }

  private loadCommandsFromServer(){
    console.log(this.botId);
    this.commandService.getAllByBot(this.botId).pipe(first()).subscribe(cmds => {
      this.storeCommandList(cmds);
    });
  }

  // Stores the commands into local list in sorted order, then resets
  //  the edited list to this stored list
  private storeCommandList (cmds) {
    this.commandList = cmds.sort(this.createdAtSort);
    this.resetEditedCommands();
  }

  // Updates server with the new command list
  sendEditedCommandListToServer() {
    // Filter out invalid Commands (ie, ones without names)
    this.editedCommandList = this.editedCommandList.filter((cmd:Command) => {
      return cmd.name && cmd.name != '';
    });

    // Sync the edited actions from the editedCommandList
    this.editedCommandList.forEach((command, index) => {
      console.log("Adding edited Action!", command);
      const aleForCommand = this.actionListEditors.find(actLE => actLE.commandEditId === index);
      //Filter out invalid Actions
      command.Actions = aleForCommand.editedActions.filter((act:Action)=> {
        return !!act.type;
      });
    });
    this.commandService.updateAll(this.botId, this.editedCommandList)
      .pipe(first())
      .subscribe(
        cmds => {
          console.log(cmds);
          this.alertService.success('Commands saved!', true);
          this.storeCommandList(cmds);
        },
        error => {
          this.alertService.error(error);
        });
  }

  createdAtSort(objA: any, objB: any): number {
      const timeA = new Date(objA['createdAt']).getTime();
      const timeB = new Date(objB['createdAt']).getTime();
      if (timeA !== timeB || !(objA.id && objB.id)) return timeA - timeB;
      else return objA.id - objB.id;
  }
  // private isCommandListEdited() {
  //   return JSON.stringify(this.editedCommandList) !== JSON.stringify(this.commandList);
  // }
}
