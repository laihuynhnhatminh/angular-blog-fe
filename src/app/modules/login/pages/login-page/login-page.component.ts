import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from 'src/app/shared/http-services/auth-http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  public loginForm!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly authHttpService: AuthHttpService,
  ) {
    this.initLoginForm();
  }

  private get email(): AbstractControl {
    return this.loginForm.controls['email'];
  }

  private get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.authHttpService.login(this.loginForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['../../home']);
      });
    }
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }
}
