import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSectionComponent } from './sec-section.component';

describe('SecSectionComponent', () => {
  let component: SecSectionComponent;
  let fixture: ComponentFixture<SecSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
