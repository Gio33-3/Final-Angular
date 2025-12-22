import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroStoreComponent } from './intro-store.component';

describe('IntroStoreComponent', () => {
  let component: IntroStoreComponent;
  let fixture: ComponentFixture<IntroStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
