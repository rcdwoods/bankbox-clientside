import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenceBeneficiaryComponent } from './transference-beneficiary.component';

describe('TransferenceBeneficiaryComponent', () => {
  let component: TransferenceBeneficiaryComponent;
  let fixture: ComponentFixture<TransferenceBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenceBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenceBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
