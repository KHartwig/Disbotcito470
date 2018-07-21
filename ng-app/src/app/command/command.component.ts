import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ActionService } from "../_services";
import { CommandService } from "../_services/command.service";
import { Command, Action } from "../_models";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  @Input() botId: number;
  @Input() command: Command;

  id: number;
  sub: any;
  actions: Action[] = [];

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private commandService: CommandService,
    private actionService: ActionService) { }

  ngOnInit() {
    this.loadActions();
  }

  private loadActions() {
    this.actionService.setIds(this.botId, this.command.id);
    this.actionService.getAll().pipe(first()).subscribe(actions => {
      this.actions = actions;
    });
  }

}
