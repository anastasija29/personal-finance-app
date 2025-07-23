import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorize-multiple',
  imports: [CommonModule],
  templateUrl: './categorize-multiple.component.html',
  styleUrl: './categorize-multiple.component.scss'
})
export class CategorizeMultipleComponent {
  showActions = false;
}
