import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLegalInstrumentComponent } from './create-legal-instrument.component';

describe('CreateLegalInstrumentComponent', () => {
  let component: CreateLegalInstrumentComponent;
  let fixture: ComponentFixture<CreateLegalInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLegalInstrumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLegalInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
