import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPendingDrinkComponent } from './mark-pending-drink.component';

describe('MarkPendingDrinkComponent', () => {
  let component: MarkPendingDrinkComponent;
  let fixture: ComponentFixture<MarkPendingDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkPendingDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkPendingDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
