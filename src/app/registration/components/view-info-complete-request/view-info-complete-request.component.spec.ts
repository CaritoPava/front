import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInfoCompleteRequestComponent } from './view-info-complete-request.component';

describe('ViewInfoCompleteRequestComponent', () => {
  let component: ViewInfoCompleteRequestComponent;
  let fixture: ComponentFixture<ViewInfoCompleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInfoCompleteRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInfoCompleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
