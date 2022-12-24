import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLegalInstrumentsComponent } from './all-legal-instruments.component';

describe('AllLegalInstrumentsComponent', () => {
  let component: AllLegalInstrumentsComponent;
  let fixture: ComponentFixture<AllLegalInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLegalInstrumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLegalInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
