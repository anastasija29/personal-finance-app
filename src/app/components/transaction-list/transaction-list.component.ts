import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { CategorizeTransactionComponent } from '../categorize-transaction/categorize-transaction.component';
import { CategorizeMultipleComponent } from '../categorize-multiple/categorize-multiple.component';
import { SplitTransactionComponent } from '../split-transaction/split-transaction.component';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule, FormsModule, CategorizeTransactionComponent, CategorizeMultipleComponent, SplitTransactionComponent],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];
  @Input() filters: any = {};

  showCategoryPopup = false;
  selectedTransaction: any = null;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  get filteredSortedTransactions() {
    return this.transactions
      .filter(t => {
        const typeMatch = !this.filters.type || t.kind === this.filters.type;
        const fromMatch = !this.filters.fromDate || t.date >= this.filters.fromDate;
        const toMatch = !this.filters.toDate || t.date <= this.filters.toDate;
        const beneficiaryMatch = !this.filters.beneficiary || t.beneficiary?.toLowerCase().includes(this.filters.beneficiary.toLowerCase());
        return typeMatch && fromMatch && toMatch && beneficiaryMatch;
      })
      .sort((a, b) => {
        if (a.date !== b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.category.localeCompare(b.category);
      });
  }

  openCategoryPopup(transaction: any) {
    this.selectedTransaction = transaction;
    this.showCategoryPopup = true;
  }

  closeCategoryPopup() {
    this.showCategoryPopup = false;
    this.selectedTransaction = null;
  }

  onApplyCategory({category, subcategory}: {category: string, subcategory: string}) {
  const transactionId = this.selectedTransaction?.id;
  this.transactionService.updateTransactionCategory(transactionId, category, subcategory)
    .subscribe(() => {
      const tx = this.transactions.find(t => t.id === transactionId);
      if (tx) {
        tx.category = category;
        tx.subcategory = subcategory;
      }
      this.showCategoryPopup = false;
      this.selectedTransaction = null;
    });
}
multiSelectMode = false;
showMultiCategoryPopup = false;

get selectedTransactions() {
  return this.transactions.filter(t => t.selected);
}

startMultiSelect() {
  this.multiSelectMode = true;
  this.transactions.forEach(t => t.selected = false);
}

cancelMultiSelect() {
  this.multiSelectMode = false;
  this.transactions.forEach(t => t.selected = false);
}

proceedCategorizeSelected() {
  if (this.selectedTransactions.length > 0) {
    this.showMultiCategoryPopup = true;
  }
}

closeMultiCategoryPopup() {
  this.showMultiCategoryPopup = false;
  this.multiSelectMode = false;
  this.transactions.forEach(t => t.selected = false);
}

onApplyCategoryMultiple({category, subcategory}: {category: string, subcategory: string}) {
  this.selectedTransactions.forEach(t => {
    t.category = category;
    t.subcategory = subcategory;
    t.selected = false;
  
    this.transactionService.updateTransactionCategory(t.id, category, subcategory).subscribe();
  });
  this.showMultiCategoryPopup = false;
  this.multiSelectMode = false;
}

splitTransactionPopup = false;
splitTransaction: any = null;

openSplitPopup(transaction: any) {
  this.splitTransaction = transaction;
  this.splitTransactionPopup = true;
}

closeSplitPopup() {
  this.splitTransactionPopup = false;
  this.splitTransaction = null;
}

loadTransactions() {
  this.transactionService.getTransactions().subscribe(data => {
    this.transactions = data;
  });
}

onApplySplit(splits: any[]) {
 
  this.transactionService.splitTransaction(this.splitTransaction.id, splits).subscribe(() => {
    this.closeSplitPopup();
    this.loadTransactions();
  });
}
}