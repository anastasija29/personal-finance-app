import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorize-multiple',
  imports: [CommonModule],
  templateUrl: './categorize-multiple.component.html',
  styleUrl: './categorize-multiple.component.scss'
})
export class CategorizeMultipleComponent {
  @Output() startMultiSelect = new EventEmitter<void>();
  @Output() proceedCategorizeEvent = new EventEmitter<void>();
  @Output() cancelCategorizeEvent = new EventEmitter<void>();

  showActions = false;

  onCategorizeClick() {
     this.showActions = !this.showActions; 
  if (this.showActions) {
    this.startMultiSelect.emit();
  } else {
    this.cancelCategorizeEvent.emit();
  }
  }

  proceedCategorize() {
    this.proceedCategorizeEvent.emit();
    this.showActions = false;
  }

  cancelCategorize() {
    this.cancelCategorizeEvent.emit();
    this.showActions = false;
  }
}