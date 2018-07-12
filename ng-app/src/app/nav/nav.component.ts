import { Component, OnInit } from '@angular/core';

import { User } from '../_models';
import { DataService } from '../_services';

@Component({
    selector: 'nav-bar',
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
    currentUser: User;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.currentUser.subscribe(user => this.currentUser = user)
    }

}
