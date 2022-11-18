import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksChooseComponent } from './banks-choose.component';

describe('BanksChooseComponent', () => {
  let component: BanksChooseComponent;
  let fixture: ComponentFixture<BanksChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanksChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
