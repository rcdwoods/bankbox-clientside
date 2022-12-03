import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixSelectComponent } from './pix-select.component';

describe('PixSelectComponent', () => {
  let component: PixSelectComponent;
  let fixture: ComponentFixture<PixSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
