import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheckerComponent } from './view-checker.component';

describe('ViewCheckerComponent', () => {
  let component: ViewCheckerComponent;
  let fixture: ComponentFixture<ViewCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
