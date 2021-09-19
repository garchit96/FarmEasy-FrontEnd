import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderForgotPassComponent } from './bidder-forgot-pass.component';

describe('BidderForgotPassComponent', () => {
  let component: BidderForgotPassComponent;
  let fixture: ComponentFixture<BidderForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderForgotPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
