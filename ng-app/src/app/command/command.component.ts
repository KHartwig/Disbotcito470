import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ActionService } from "../_services";
import { CommandService } from "../_services/command.service";
import { Command, Action } from "../_models";
import {first} from "rxjs/internal/operators";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  @Input() botId: number;
  @Input() command: Command;
  @Output() commandDeletedEvent = new EventEmitter<Command>();
  newAction: Action = new Action();
  submitted = false;

  id: number;
  sub: any;
  actions: Action[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private commandService: CommandService,
    private actionService: ActionService) { }

  ngOnInit() {
    this.loadActions();
  }

  deleteCommand(id: number) {
    this.commandService.delete(id).pipe(first()).subscribe();
    this.commandDeletedEvent.emit();
  }

  addAction() {
    this.submitted = true;

    this.newAction.type = 'respondDirect';
    this.newAction.parameters = [];

    this.actionService.setIds(this.botId, this.command.id);
    this.actionService.add(this.newAction)
      .pipe(first())
      .subscribe(data => {
        this.submitted = false;
        this.loadActions();
      });
  }

  updateAction(action: Action) {
    this.actionService.setIds(this.botId, this.command.id);
    this.actionService.update(action, action.id)
      .pipe(first())
      .subscribe(data => { this.loadActions(); });
  }

  deleteAction(id: number) {
    this.actionService.setIds(this.botId, this.command.id);
    this.actionService.delete(id)
      .pipe(first())
      .subscribe(data => { this.loadActions(); });
  }

  private loadActions() {
    this.actionService.setIds(this.botId, this.command.id);
    this.actionService.getAll().pipe(first()).subscribe(actions => {
      this.actions = actions;
    });
  }

}
