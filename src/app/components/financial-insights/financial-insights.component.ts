import { Component, Input } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { SpendingTreemapComponent } from '../spending-treemap/spending-treemap.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financial-insights',
  imports: [CommonModule, FiltersComponent, SpendingTreemapComponent],
  templateUrl: './financial-insights.component.html',
  styleUrls: ['./financial-insights.component.scss'] 
})
export class FinancialInsightsComponent {
  @Input() transactions: any[] = [];

  showTreemap = false;

  get filteredSortedTransactions() {
    return this.transactions;
  }

  onChooseView(view: string) {
    if (view === 'treemap') {
    this.showTreemap = !this.showTreemap;
  } else {
    this.showTreemap = false;
  }
}
}