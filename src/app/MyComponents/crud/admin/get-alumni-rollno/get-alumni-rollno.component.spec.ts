import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlumniRollnoComponent } from './get-alumni-rollno.component';

describe('GetAlumniRollnoComponent', () => {
  let component: GetAlumniRollnoComponent;
  let fixture: ComponentFixture<GetAlumniRollnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlumniRollnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAlumniRollnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
