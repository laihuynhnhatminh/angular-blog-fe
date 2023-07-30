// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// NzModule
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
// Standalone
import { AppLoginComponent } from 'src/app/shared/components/login/login.component';
// Other
import { LOGIN_ROUTES } from './login.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const ANGULAR_MODULES = [ReactiveFormsModule, FormsModule];
const ANTD_MODULES = [NzButtonModule, NzFormModule, NzInputModule];
const STANDALONES = [AppLoginComponent];
@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    ...ANGULAR_MODULES,
    ...ANTD_MODULES,
    ...STANDALONES,
  ],
  providers: [],
})
export class LoginModule {}
