import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRoutingComponent } from './registration-routing.component';

describe('RegistrationRoutingComponent', () => {
  let component: RegistrationRoutingComponent;
  let fixture: ComponentFixture<RegistrationRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
