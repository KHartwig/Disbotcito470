import { Component, OnInit, Input } from '@angular/core';
import { Command } from "../_models";
import { CommandService } from "../_services/command.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {
  @Input() botId: number;
  commandList: Command[] = [];
  addCommandForm: FormGroup;
  submitted = false;
  newCommandName = '';

  sub: any;

  constructor(private commandService: CommandService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.commandService.setBotId(this.botId);
    this.loadCommands();

    this.addCommandForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addCommandForm.controls; }

  addCommand() {
    this.submitted = true;
    if (this.addCommandForm.invalid) {
      return;
    }

    this.commandService.add(this.addCommandForm.value)
      .pipe(first())
      .subscribe(data => {
        this.submitted = false;
        this.addCommandForm.setValue({name: ''});
        this.loadCommands();
      });
  }

  private loadCommands () {
    this.commandService.getAll().pipe(first()).subscribe(cmds => {
      this.commandList = cmds;
    });
  }
}
