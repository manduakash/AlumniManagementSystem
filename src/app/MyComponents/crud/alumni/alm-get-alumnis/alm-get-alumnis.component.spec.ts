import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmGetAlumnisComponent } from './alm-get-alumnis.component';

describe('AlmGetAlumnisComponent', () => {
  let component: AlmGetAlumnisComponent;
  let fixture: ComponentFixture<AlmGetAlumnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmGetAlumnisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmGetAlumnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
