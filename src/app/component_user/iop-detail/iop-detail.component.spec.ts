import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOPDetailComponent } from './iop-detail.component';

describe('IOPDetailComponent', () => {
  let component: IOPDetailComponent;
  let fixture: ComponentFixture<IOPDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOPDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOPDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
