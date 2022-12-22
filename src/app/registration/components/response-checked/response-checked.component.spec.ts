import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseCheckedComponent } from './response-checked.component';

describe('ResponseCheckedComponent', () => {
  let component: ResponseCheckedComponent;
  let fixture: ComponentFixture<ResponseCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
