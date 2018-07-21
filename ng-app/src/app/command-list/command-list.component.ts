import { Component, OnInit, Input } from '@angular/core';
import { Command } from "../_models";
import { CommandService } from "../_services/command.service";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {
  @Input() botId: number;
  commandList: Command[] = [];

  sub: any;

  constructor(private commandService: CommandService) { }

  ngOnInit() {
    this.commandService.setBotId(this.botId);
    this.loadCommands();
  }
  private loadCommands () {
    this.commandService.getAll().pipe(first()).subscribe(cmds => {
      this.commandList = cmds;
    });
  }
}
