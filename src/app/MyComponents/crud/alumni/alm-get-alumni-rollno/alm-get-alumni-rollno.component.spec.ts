import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmGetAlumniRollnoComponent } from './alm-get-alumni-rollno.component';

describe('AlmGetAlumniRollnoComponent', () => {
  let component: AlmGetAlumniRollnoComponent;
  let fixture: ComponentFixture<AlmGetAlumniRollnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmGetAlumniRollnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmGetAlumniRollnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
