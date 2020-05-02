import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIopComponent } from './update-iop.component';

describe('UpdateIopComponent', () => {
  let component: UpdateIopComponent;
  let fixture: ComponentFixture<UpdateIopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
