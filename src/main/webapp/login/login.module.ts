import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeOpenMindAppSharedModule } from 'app/shared/shared.module';

import { LoginComponent } from './login.component';
import { LOGIN_ROUTE } from './login.route';

@NgModule({
  imports: [BeOpenMindAppSharedModule, RouterModule.forChild([LOGIN_ROUTE])],
  declarations: [LoginComponent]
})
export class LoginModule {}
