import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksConfirmComponent } from './banks-confirm.component';

describe('BanksConfirmComponent', () => {
  let component: BanksConfirmComponent;
  let fixture: ComponentFixture<BanksConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanksConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
