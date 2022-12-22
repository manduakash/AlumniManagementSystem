import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlumnisComponent } from './get-alumnis.component';

describe('GetAlumnisComponent', () => {
  let component: GetAlumnisComponent;
  let fixture: ComponentFixture<GetAlumnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlumnisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAlumnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
