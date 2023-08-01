import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  standalone: true,
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
  imports: [CommonModule],
})
export class SimpleModalComponent {
  //TODO: REDO
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
