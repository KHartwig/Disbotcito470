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
    users: User[] = [];
    selectedCat: string = '';
    itemForm: FormGroup;

    constructor(private userService: UserService,
                private data: DataService,
                private formBuilder: FormBuilder,
                private alertService: AlertService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.data.currentUser.subscribe(user => this.currentUser = user);
    }

    ngOnInit() {
        // this.itemForm = this.formBuilder.group({
        //     itemname: ['', Validators.required],
        //     category: ['', Validators.required],
        //     ownerId: ['', Validators.required],
        //     quantity: ['', Validators.required]
        // });
        // this.itemService.getAll()
        //   .subscribe(items => {
        //     //assign the itemlist property to the proper http response
        //     this.itemsList = items
        //     })
        //
        // this.loadAllUsers();
        // this.loadAllItems();
    }

//     createItem() {
// // console.log(this.itemForm.value);
// // console.log(this.currentUser['_id']);
//         this.itemService.create(this.itemForm.value, this.currentUser['_id'])
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     this.alertService.success('Item create successful', true);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                 });
//         this.loadAllItems();
//     }
//
//     editItem(item: Item) {
//         // console.log(item);
//         if(this.itemsList.includes(item)){
//             if(!this.editItems.includes(item)){
//                 this.editItems.push(item)
//             }else{
//                 this.editItems.splice(this.editItems.indexOf(item), 1)
//                 this.itemService.update(item).subscribe(res => {
//                     console.log('Update Succesful')
//                 }, err => {
//                     this.itemService.update(item)
//                     console.error('Update Unsuccesful')
//                 })
//             }
//         }
//     }
//
//     doneItem(item:Item){
//       item.status = 'Done'
//       this.itemService.update(item).subscribe(res => {
//         console.log('Update Succesful')
//       }, err => {
//         this.itemService.update(item)
//         console.error('Update Unsuccesful')
//       })
//     }
//
//
//     submitItem(event:any, item:Item){
//       if(event.keyCode ==13){
//         this.itemService.update(item)
//       }
//     }
//
//
//     deleteUser(id: number) {
//         this.userService.delete(id).pipe(first()).subscribe(() => {
//             this.loadAllUsers()
//         });
//     }
//
//     deleteItem(id: number) {
//         this.itemService.delete(id).pipe(first()).subscribe(() => {
//             this.loadAllItems()
//         });
//     }
//
//     private loadAllUsers() {
//         this.userService.getAll().pipe(first()).subscribe(users => {
//             this.users = users;
//         });
//     }
//
//     private loadAllItems() {
//         this.itemService.getAll().pipe(first()).subscribe(items => {
//             this.itemsList = items;
//             console.log(this.itemsList);
//         })
//     }
//
//     onFItemAdded($event) {
//         console.log("Featured item added");
//         this.itemService.createF($event, this.currentUser['_id']).pipe(first())
//             .subscribe(
//                 data => {
//                     this.alertService.success('Item create successful', true);
//                     this.loadAllItems();
//                 },
//                 error => {
//                     this.alertService.error(error);
//                 });
//     }
//
//     //event handler for the select element's change event in Category
//     selectChangeHandler (event: any) {
//       this.selectedCat = event.target.value;
//     }
}
