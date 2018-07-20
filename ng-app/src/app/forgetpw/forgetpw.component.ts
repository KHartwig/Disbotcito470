import { Component } from '@angular/core';
import { AuthService } from "./somewhere/auth.service";

@Component({
  // omitted...
})

export class ResetPasswordComponent {

   resetPassword(email: string) {
     this.auth.resetPassword(email)
   }

}
