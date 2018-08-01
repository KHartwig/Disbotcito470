import { Component, OnInit, Input } from '@angular/core';
import { Command, Action } from "../_models";
// import * as ActionTypes from "./ActionTypes.json";

@Component({
  selector: 'app-actions-edit',
  templateUrl: './actions-edit.component.html',
  styleUrls: ['./actions-edit.component.css']
})
export class ActionsEditComponent implements OnInit {
  @Input() actions: Action[];
  // Local id to distinguish between edited commands
  //  which may not have a database ID yet
  @Input() commandEditId: number;
  editedActions: Action[] = [];
  possibleActionTypes = [{
      "id": "msgDirect",
      "display": "Message Direct",
      "params": [
        { "type": "input-text", "display": "Messsage"}
      ]
    },
    {
      "id": "msgChannel",
      "display": "Message Channel",
      "params": [
        { "type": "input-text", "display": "Messsage"}
      ]
    },
    {
      "id": "playAudio",
      "display": "Play Audio VoiceChannel",
      "params": [
        { "type": "input", "display": "URL"}
      ]
    },
    {
      "id": "slots",
      "display": "Slots Game",
      "params": [
        { "type": "selector", "display": "Number of Slots",
          "choices":
          [
            { "display": "1", "id":"1" },
            { "display": "2", "id":"2" },
            { "display": "3", "id":"3" },
            { "display": "4", "id":"4" },
            { "display": "5", "id":"5" },
            { "display": "6", "id":"6" },
            { "display": "7", "id":"7" },
            { "display": "8", "id":"8" },
            { "display": "9", "id":"9" },
            { "display": "10", "id":"10" }
          ]
        },
        { "type": "selector", "display": "Emoji Type",
          "choices": [
            { "display": "Nature", "id":"nature" },
            { "display": "Number", "id":"server" },
            { "display": "Server", "id":"number" }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    // Make a deep copy of the actions to edit
    this.editedActions = this.actions.map(x => Object.assign({}, x));
    this.resetActions();
  }

  private createAction() {
    this.editedActions.push(new Action());
  }

  private deleteAction(index) {
    this.editedActions.splice(index, 1);
  }

  // Stores a deep copy of the actions passed in
  private resetActions() {
    this.editedActions = this.actions.map(x => Object.assign({}, x));
  }
  private removeActionParameters(action: Action) {
    action.parameters = [];
  }
}
