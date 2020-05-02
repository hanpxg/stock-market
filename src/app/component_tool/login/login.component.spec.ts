import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('#clicked() should toggle #isOn', () => {
  //   const comp = new LoginComponent();
  //   expect(comp.isOn).toBe(false, 'off at first');
  //   comp.clicked();
  //   expect(comp.isOn).toBe(true, 'on after click');
  //   comp.clicked();
  //   expect(comp.isOn).toBe(false, 'off after second click');
  // });

  // it('#clicked() should set #message to "is on"', () => {
  //   const comp = new LoginComponent();
  //   expect(comp.message).toMatch(/is off/i, 'off at first');
  //   comp.clicked();
  //   expect(comp.message).toMatch(/is on/i, 'on after clicked');
  // });
});


