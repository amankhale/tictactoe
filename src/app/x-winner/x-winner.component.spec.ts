import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XWinnerComponent } from './x-winner.component';

describe('XWinnerComponent', () => {
  let component: XWinnerComponent;
  let fixture: ComponentFixture<XWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
