import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLegalInstrumentComponent } from './info-legal-instrument.component';

describe('InfoLegalInstrumentComponent', () => {
  let component: InfoLegalInstrumentComponent;
  let fixture: ComponentFixture<InfoLegalInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLegalInstrumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLegalInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
