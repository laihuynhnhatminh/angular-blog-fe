import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, RouterModule.forChild(LOGIN_ROUTES)],
  providers: [],
})
export class LoginModule {}
