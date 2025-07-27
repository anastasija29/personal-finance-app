import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  selectedType: string = '';
  fromDate: string = '';
  toDate: string = '';
  @Output() filterChange = new EventEmitter<any>();

  onFilterTransactions() {
    this.filterChange.emit({
      type: this.selectedType,
      fromDate: this.fromDate,
      toDate: this.toDate
    });
  }

  clearFilters() {
  this.selectedType = '';
  this.fromDate = '';
  this.toDate = '';
  
  this.filterChange.emit({
    type: '',
    fromDate: '',
    toDate: '',
    beneficiary: ''
    
  });
}
}