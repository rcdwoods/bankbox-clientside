import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixSummaryComponent } from './pix-summary.component';

describe('PixSummaryComponent', () => {
  let component: PixSummaryComponent;
  let fixture: ComponentFixture<PixSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
