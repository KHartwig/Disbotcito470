import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs/operators';

import { FeaturedItem } from '../_models';
import { FeaturedListService } from '../_services';

import { User } from '../_models';
import { DataService } from '../_services';
import { ItemService } from '../_services';
import { AlertService } from '../_services';

@Component({
    selector: 'featured-list',
    templateUrl: 'featured_list.component.html'
})
export class FeaturedListComponent implements OnInit {
    featuredItems: FeaturedItem[] = [];
    currentUser: User;
    @Output() addedEvent = new EventEmitter<FeaturedItem>();

    constructor(private featuredListService:FeaturedListService,   
                private data: DataService, 
                private itemService:ItemService,
                private alertService: AlertService


                ) {
        this.data.currentUser.subscribe(user => this.currentUser = user);
    }

    ngOnInit() {
        this.loadAllFeaturedItems();
    }

    private loadAllFeaturedItems() {
        this.featuredListService.getAll().pipe(first()).subscribe(items => {
            this.featuredItems = items;
        });
    }

    public addItem(fitem:FeaturedItem) {
        console.log(fitem);
        console.log(this.currentUser['_id']);

        // this.itemService.createF(fitem, this.currentUser['_id']).pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Item create successful', true);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //         });
        this.notifyAdded(fitem);
    }

    notifyAdded(fitem:FeaturedItem) {
        this.addedEvent.emit(fitem);
    }

    // private loadAllItems() {
    //     this.itemService.getAll().pipe(first()).subscribe(items => {
    //         this.itemsList = items;
    //         console.log(this.itemsList);
    //     })
    // }    
}