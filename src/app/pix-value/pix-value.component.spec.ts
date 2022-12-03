import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixValueComponent } from './pix-value.component';

describe('PixValueComponent', () => {
  let component: PixValueComponent;
  let fixture: ComponentFixture<PixValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
