import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, DataService, UserService, ContactService } from './_services';
import { HomeComponent } from './home';
import { NavComponent } from './nav';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        NavComponent,
        LoginComponent,
        RegisterComponent,
        ContactsComponent,
        ContactsAddComponent,
        ContactsEditComponent,
        ContactsDetailsComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        DataService,
        UserService,
        ContactService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
