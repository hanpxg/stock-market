import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonsChartsComponent } from './comparisons-charts.component';

describe('ComparisonsChartsComponent', () => {
  let component: ComparisonsChartsComponent;
  let fixture: ComponentFixture<ComparisonsChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonsChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
