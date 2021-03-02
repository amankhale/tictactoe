import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OWinnerComponent } from './o-winner.component';

describe('OWinnerComponent', () => {
  let component: OWinnerComponent;
  let fixture: ComponentFixture<OWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
