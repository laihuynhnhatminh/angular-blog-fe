import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-simple-modal',
  standalone: true,
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
  imports: [CommonModule, NzModalModule],
})
export class SimpleModalComponent {
  @Input() public visible = false;
  @Input() public title = '';
  @Input() public modalContent = '';
  @Output() public handleOk = new EventEmitter<void>();
  @Output() public handleCancel = new EventEmitter<void>();

  public onHandleOk(): void {
    this.handleOk.emit();
  }

  public onHandleCancel(): void {
    this.handleCancel.emit();
  }
}
