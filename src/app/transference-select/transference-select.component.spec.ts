import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenceSelectComponent } from './transference-select.component';

describe('TransferenceSelectComponent', () => {
  let component: TransferenceSelectComponent;
  let fixture: ComponentFixture<TransferenceSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenceSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
