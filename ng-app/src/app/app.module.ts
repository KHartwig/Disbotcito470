import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

// Bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, DataService,
          UserService, BotService, GuildService,
          ActionService, DiscordService} from './_services';
import { HomeComponent } from './home';
import { NavComponent } from './nav';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BotsComponent } from './bots/bots.component';
import { BotsEditComponent } from './bots-edit/bots-edit.component';
import { BotsDetailsComponent } from './bots-details/bots-details.component';
import { GuildsComponent } from './guilds/guilds.component';
import { GuildsDetailsComponent } from './guilds-details/guilds-details.component';
import { CommandService } from "./_services/command.service";
import { ActionsEditComponent } from './actions-edit/actions-edit.component';
import { CommandsEditComponent } from './commands-edit/commands-edit.component';
import { ModalLoginComponent } from "./modal-login/modal-login.component";
import { ModalBotAddComponent } from './modal-bot-add/modal-bot-add.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        NavComponent,
        LoginComponent,
        RegisterComponent,
        BotsComponent,
        BotsEditComponent,
        BotsDetailsComponent,
        GuildsComponent,
        GuildsDetailsComponent,
        ActionsEditComponent,
        CommandsEditComponent,
        ModalLoginComponent,
        ModalBotAddComponent    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        DataService,
        UserService,
        BotService,
        GuildService,
        CommandService,
        ActionService,
        DiscordService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    entryComponents: [
      ModalLoginComponent,
      ModalBotAddComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
