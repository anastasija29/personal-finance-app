import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizeTransactionComponent } from './categorize-transaction.component';

describe('CategorizeTransactionComponent', () => {
  let component: CategorizeTransactionComponent;
  let fixture: ComponentFixture<CategorizeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizeTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
