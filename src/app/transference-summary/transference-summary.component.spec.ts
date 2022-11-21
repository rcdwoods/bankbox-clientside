import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenceSummaryComponent } from './transference-summary.component';

describe('TransferenceSummaryComponent', () => {
  let component: TransferenceSummaryComponent;
  let fixture: ComponentFixture<TransferenceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenceSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
