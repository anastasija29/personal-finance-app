import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-split-transaction',
  imports: [FormsModule, CommonModule],
  templateUrl: './split-transaction.component.html',
  styleUrls: ['./split-transaction.component.scss'],
})
export class SplitTransactionComponent {
  @Input() transaction: any;
  @Output() close = new EventEmitter<void>();
  @Output() applySplit = new EventEmitter<any[]>();

  categories = [
  'Misc Expenses', 'Auto & Transport', 'Bills & Utilities', 'Education', 'Entertainment',
  'Fees & Charges', 'Financial', 'Gifts & Donations', 'Health & Fitness', 'Home',
  'Income', 'Kids', 'Loans', 'Personal Care', 'Pets', 'Shopping', 'Taxes', 'Transfer',
  'Travel', 'Food & Dining', 'Split', 'Other'
];

subcategoriesMap: { [key: string]: string[] } = {
  'Auto & Transport': ['Other', 'Auto Insurance', 'Auto Leasing', 'Gas & Fuel', 'Parking', 'Service & Parts'],
  'Bills & Utilities': ['Home Phone', 'Internet', 'Mobile Phone', 'Television', 'Utilities'],
  'Education': ['Books & Supplies', 'Tuition'],
  'Entertainment': ['Arts', 'Movies & DVDs', 'Music', 'Newspapers & Magazines'],
  'Fees & Charges': ['ATM Fee', 'Bank Fee', 'Late Fee'],
  'Financial': ['Life Insurance'],
  'Gifts & Donations': ['Charity', 'Gift'],
  'Health & Fitness': ['Dentist', 'Doctor', 'Eyecare', 'Gym', 'Health Insurance', 'Pharmacy', 'Sports'],
  'Home': ['Home Improvement', 'Home Insurance', 'Home Services', 'Home Supplies', 'Mortgage & Rent'],
  'Income': ['Other', 'Bonus', 'Interest Income', 'Paycheck', 'Rental Income'],
  'Kids': ['Allowance', 'Baby Supplies', 'Kids Activities', 'Toys'],
  'Loans': ['Loan Fees and Charges', 'Loan Payment'],
  'Personal Care': ['Hair', 'Spa & Massage'],
  'Pets': ['Other', 'Pet Food & Supplies', 'Pet Grooming', 'Veterinary'],
  'Shopping': ['Books', 'Clothing', 'Electronics & Software', 'Sporting Goods'],
  'Taxes': ['Property Tax', 'Income Tax'],
  'Transfer': ['Credit Card Payment'],
  'Travel': ['Air Travel', 'Hotel', 'Rental Car & Taxi', 'Vacation'],
  'Food & Dining': ['Groceries', 'Restaurants'],
  'Split': [],
  'Misc Expenses': [],
  'Other': []
};

  splits = [
    { category: '', subcategory: '', amount: null },
    { category: '', subcategory: '', amount: null }
  ];

  addSplit() {
    this.splits.push({ category: '', subcategory: '', amount: null });
  }

  removeSplit(index: number) {
    this.splits.splice(index, 1);
  }

  isAmountValid() {
    const sum = this.splits.reduce((acc, s) => acc + Number(s.amount), 0);
    return sum === Number(this.transaction.amount);
  }

  onApply() {
    if (this.isAmountValid()) {
      this.applySplit.emit(this.splits);
      this.close.emit();
    }
  }
}