import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSecComponent } from './double-sec.component';

describe('DoubleSecComponent', () => {
  let component: DoubleSecComponent;
  let fixture: ComponentFixture<DoubleSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
