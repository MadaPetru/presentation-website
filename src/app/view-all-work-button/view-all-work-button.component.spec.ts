import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllWorkButtonComponent } from './view-all-work-button.component';

describe('ViewAllWorkButtonComponent', () => {
  let component: ViewAllWorkButtonComponent;
  let fixture: ComponentFixture<ViewAllWorkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllWorkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllWorkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
