import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeResultsComponent } from './cumulative-results.component';

describe('CumulativeResultsComponent', () => {
  let component: CumulativeResultsComponent;
  let fixture: ComponentFixture<CumulativeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
