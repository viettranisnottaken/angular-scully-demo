import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { SignupComponent } from './signup/signup.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignupComponent, CredentialsComponent, LoginComponent],
  imports: [CommonModule, CredentialsRoutingModule],
  exports: [],
  entryComponents: [],
})
export class CredentialsModule {}
