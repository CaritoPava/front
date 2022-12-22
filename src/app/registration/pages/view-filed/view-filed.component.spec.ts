import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFiledComponent } from './view-filed.component';

describe('ViewFiledComponent', () => {
  let component: ViewFiledComponent;
  let fixture: ComponentFixture<ViewFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
