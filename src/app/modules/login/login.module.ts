// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// Standalone
import { AppLoginComponent } from 'src/app/shared/components/login/login.component';

// Other
import { LOGIN_ROUTES } from './login.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const ANGULAR_MODULES = [ReactiveFormsModule, FormsModule];
const STANDALONES = [AppLoginComponent];
const PRIMENG_MODULES = [ButtonModule, InputTextModule];
@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    ...ANGULAR_MODULES,
    ...STANDALONES,
    ...PRIMENG_MODULES,
  ],
  providers: [],
})
export class LoginModule {}
