import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  constructor(private readonly router: Router) {}

  public onRegister(): void {
    this.router.navigate(['../../home']);
  }
}
