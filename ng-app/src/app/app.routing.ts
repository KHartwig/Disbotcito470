import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { ContactsComponent } from './contacts/contacts.component'
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsDetailsComponent } from "./contacts-details/contacts-details.component";
import { ContactsEditComponent } from "./contacts-edit/contacts-edit.component";

const appRoutes: Routes = [
    { path: '', component: ContactsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add', component: ContactsAddComponent },
    { path: 'contacts/:id', component: ContactsDetailsComponent },
    { path: 'contacts/edit/:id', component: ContactsEditComponent },

  // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
