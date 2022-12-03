import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixBeneficiaryComponent } from './pix-beneficiary.component';

describe('PixBeneficiaryComponent', () => {
  let component: PixBeneficiaryComponent;
  let fixture: ComponentFixture<PixBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
