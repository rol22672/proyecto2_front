import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPendingComponent } from './mark-pending.component';

describe('MarkPendingComponent', () => {
  let component: MarkPendingComponent;
  let fixture: ComponentFixture<MarkPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
