import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiledComponent } from './list-filed.component';

describe('ListFiledComponent', () => {
  let component: ListFiledComponent;
  let fixture: ComponentFixture<ListFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
