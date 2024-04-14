import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDoneComponent } from './mark-done.component';

describe('MarkDoneComponent', () => {
  let component: MarkDoneComponent;
  let fixture: ComponentFixture<MarkDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
