import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPoComponent } from './report-po.component';

describe('ReportPoComponent', () => {
  let component: ReportPoComponent;
  let fixture: ComponentFixture<ReportPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
