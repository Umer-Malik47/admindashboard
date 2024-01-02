import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstypesComponent } from './projectstypes.component';

describe('ProjectstypesComponent', () => {
  let component: ProjectstypesComponent;
  let fixture: ComponentFixture<ProjectstypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectstypesComponent]
    });
    fixture = TestBed.createComponent(ProjectstypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
