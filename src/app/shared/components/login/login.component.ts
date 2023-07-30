import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';

const ANTD_MODULES = [NzLayoutModule, NzGridModule, NzImageModule];

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ...ANTD_MODULES],
})
export class AppLoginComponent {
  @Input() title = '';
}
