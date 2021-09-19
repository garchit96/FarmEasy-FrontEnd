import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsForBidderComponent } from './bids-for-bidder.component';

describe('BidsForBidderComponent', () => {
  let component: BidsForBidderComponent;
  let fixture: ComponentFixture<BidsForBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsForBidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsForBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
