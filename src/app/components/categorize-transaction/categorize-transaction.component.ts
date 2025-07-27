import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorize-transaction',
  imports: [FormsModule, CommonModule],
  templateUrl: './categorize-transaction.component.html',
  styleUrls: ['./categorize-transaction.component.scss']
})
export class CategorizeTransactionComponent {
  @Input() transaction: any;
  @Output() close = new EventEmitter<void>();
  @Output() applyCategory = new EventEmitter<{category: string, subcategory: string}>();

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

  selectedCategory = '';
  selectedSubcategory = '';

  ngOnInit() {
    if (this.transaction) {
      this.selectedCategory = this.transaction.category || '';
      this.selectedSubcategory = this.transaction.subcategory || '';
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.selectedSubcategory = '';
  }

  onApply() {
    this.applyCategory.emit({
      category: this.selectedCategory,
      subcategory: this.selectedSubcategory
    });
    this.close.emit();
  }
}