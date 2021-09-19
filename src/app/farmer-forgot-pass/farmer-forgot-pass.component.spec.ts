import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerForgotPassComponent } from './farmer-forgot-pass.component';

describe('FarmerForgotPassComponent', () => {
  let component: FarmerForgotPassComponent;
  let fixture: ComponentFixture<FarmerForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerForgotPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
