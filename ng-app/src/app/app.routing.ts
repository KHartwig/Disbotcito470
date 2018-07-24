import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { BotsDetailsComponent } from "./bots-details/bots-details.component";
import { BotsEditComponent } from "./bots-edit/bots-edit.component";
import { GuildsDetailsComponent } from "./guilds-details/guilds-details.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: 'forgetpw', component: ForgetpwComponent },
    { path: 'bots/add', component: BotsEditComponent },
    { path: 'bots/:bid', component: BotsDetailsComponent, 
        // children: [{ path: 'guilds/:gid', component: GuildsDetailsComponent }]
    },
    { path: 'bots/edit/:bid', component: BotsEditComponent },

    { path: 'bots/:bid/guilds/:gid', component: GuildsDetailsComponent},

  // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
