import { Component, OnInit, Input } from '@angular/core';
import { Bot, Command } from "../_models";
import { CommandService } from "../_services/command.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  @Input() bot: Bot;
  commandList: Command[] = [];

  sub: any;
  id: number;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private commandService: CommandService) { }

  ngOnInit() {
    this.commandService.setBotId(this.bot.id);
    this.loadCommands();
  }
  private loadCommands () {
    this.commandService.getAll().pipe(first()).subscribe(cmds => {
      this.commandList = cmds;
    });
  }
}
