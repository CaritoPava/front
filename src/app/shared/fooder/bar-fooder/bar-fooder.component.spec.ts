import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFooderComponent } from './bar-fooder.component';

describe('BarFooderComponent', () => {
  let component: BarFooderComponent;
  let fixture: ComponentFixture<BarFooderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarFooderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarFooderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
