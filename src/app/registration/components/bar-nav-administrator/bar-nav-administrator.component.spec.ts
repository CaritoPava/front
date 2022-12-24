import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavAdministratorComponent } from './bar-nav-administrator.component';

describe('BarNavAdministratorComponent', () => {
  let component: BarNavAdministratorComponent;
  let fixture: ComponentFixture<BarNavAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarNavAdministratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNavAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
