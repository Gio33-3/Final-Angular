import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherdSectionComponent } from './therd-section.component';

describe('TherdSectionComponent', () => {
  let component: TherdSectionComponent;
  let fixture: ComponentFixture<TherdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherdSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
