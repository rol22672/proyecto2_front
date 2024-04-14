import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDoneDrinkComponent } from './mark-done-drink.component';

describe('MarkDoneDrinkComponent', () => {
  let component: MarkDoneDrinkComponent;
  let fixture: ComponentFixture<MarkDoneDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkDoneDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkDoneDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
