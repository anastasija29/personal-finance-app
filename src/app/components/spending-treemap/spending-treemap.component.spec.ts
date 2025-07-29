import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingTreemapComponent } from './spending-treemap.component';

describe('SpendingTreemapComponent', () => {
  let component: SpendingTreemapComponent;
  let fixture: ComponentFixture<SpendingTreemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingTreemapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingTreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
