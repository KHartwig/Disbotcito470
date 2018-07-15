import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { BotsComponent } from './bots/bots.component'
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsDetailsComponent } from "./contacts-details/contacts-details.component";
import { BotsEditComponent } from "./bots-edit/bots-edit.component";

const appRoutes: Routes = [
    { path: '', component: BotsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'bots/add', component: BotsEditComponent },
    { path: 'bots/:id', component: ContactsDetailsComponent },
    { path: 'bots/edit/:id', component: BotsEditComponent },

  // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
