import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyCredentialsRoutingModule } from './lazy-credentials-routing.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, LazyCredentialsRoutingModule],
  entryComponents: [SignupComponent],
})
export class LazyCredentialsModule {}
