import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeIconComponent } from './leetcode-icon.component';

describe('LeetcodeIconComponent', () => {
  let component: LeetcodeIconComponent;
  let fixture: ComponentFixture<LeetcodeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeetcodeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeetcodeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
