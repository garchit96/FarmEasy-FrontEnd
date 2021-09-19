import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveBid } from 'src/LiveBid';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-bidder-dashboard',
  templateUrl: './bidder-dashboard.component.html',
  styleUrls: ['./bidder-dashboard.component.css']
})
export class BidderDashboardComponent implements OnInit {
  // iwillhide=false;
  // public items :any[];
  // constructor(private farmEasy: FarmEasyService, private router: Router) { }

  // bidderName:String;
  // currentPrice:number;
  // liveBid = new LiveBid();


  // placebid(item: any)
  // {
  //   this.liveBid.sellRequest.sellId = item[0];
  // }

  // confirm()
  // {

  //   this.liveBid.sellRequest.basePrice = this.currentPrice;
  //   this.farmEasy.addBid(this.liveBid).subscribe();
  //   console.log(this.liveBid)

    // this.ngOnInit();
    ngOnInit(): void {}
  }
 
   
  //   this.liveBid.bidderDetail.bidderEmail = sessionStorage.getItem('bemail');

  //   this.farmEasy.liveBidsForBidder().subscribe(data=>{
  //     this.items=data;
  //   })
  //   console.log()
   



