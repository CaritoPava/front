import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmrntsByDependencieComponent } from './assignmrnts-by-dependencie.component';

describe('AssignmrntsByDependencieComponent', () => {
  let component: AssignmrntsByDependencieComponent;
  let fixture: ComponentFixture<AssignmrntsByDependencieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmrntsByDependencieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmrntsByDependencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
