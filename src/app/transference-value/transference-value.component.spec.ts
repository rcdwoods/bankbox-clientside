import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenceValueComponent } from './transference-value.component';

describe('TransferenceValueComponent', () => {
  let component: TransferenceValueComponent;
  let fixture: ComponentFixture<TransferenceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenceValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
