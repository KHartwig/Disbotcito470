import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { DataService } from '../_services';
import { UserService } from '../_services';
import { AlertService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService,
                private data: DataService,
                private formBuilder: FormBuilder,
                private alertService: AlertService) {
        this.data.currentUser.subscribe(user => this.currentUser = user);
    }

    ngOnInit() {

    }
}
