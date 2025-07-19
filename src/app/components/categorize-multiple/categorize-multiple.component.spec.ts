import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizeMultipleComponent } from './categorize-multiple.component';

describe('CategorizeMultipleComponent', () => {
  let component: CategorizeMultipleComponent;
  let fixture: ComponentFixture<CategorizeMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizeMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizeMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
