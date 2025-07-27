import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsParentComponent } from './transactions-parent.component';

describe('TransactionsParentComponent', () => {
  let component: TransactionsParentComponent;
  let fixture: ComponentFixture<TransactionsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
