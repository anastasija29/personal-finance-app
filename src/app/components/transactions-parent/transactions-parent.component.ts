import { Component } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-transactions-parent',
  imports: [TransactionListComponent, FiltersComponent],
  templateUrl: './transactions-parent.component.html',
  styleUrl: './transactions-parent.component.scss'
})
export class TransactionsParentComponent {
  filters: any = {};

  applyFilters(event: any) {
    this.filters = event;
  }
}