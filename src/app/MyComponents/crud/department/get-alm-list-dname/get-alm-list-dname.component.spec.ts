import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlmListDnameComponent } from './get-alm-list-dname.component';

describe('GetAlmListDnameComponent', () => {
  let component: GetAlmListDnameComponent;
  let fixture: ComponentFixture<GetAlmListDnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAlmListDnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAlmListDnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
