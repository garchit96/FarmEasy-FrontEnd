import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FarmEasyService } from '../farm-easy.service';
import { LiveBidsForBidder } from '../LiveBidsForBidder';
import { FormsModule, NgForm } from '@angular/forms';
import { LiveBid } from 'src/LiveBid';

@Component({
  selector: 'app-bids-for-bidder',
  templateUrl: './bids-for-bidder.component.html',
  styleUrls: ['./bids-for-bidder.component.css']
})
export class BidsForBidderComponent implements OnInit {

  liveBidsForBidder: LiveBidsForBidder[]; //will have all the records of the DB< -> Dept table
  tempLiveBidsForBidder: LiveBidsForBidder[];

  bidObj:LiveBid;

  private subscription: Subscription;
  constructor(private farmEasyService: FarmEasyService) { }

  ngOnInit(){
    
   this.viewLiveBids();

  //   onSubmit(f: NgForm)
  // {
  //    console.log(f.value) ;
  //     // this.farmEasyService.mail(this.email).subscribe();
  //     this.farmEasyService.liveBidsForBidder(f.value).subscribe(data => console.log(data));
    }
   
viewLiveBids()
{
  this.subscription = this.farmEasyService.liveBidsForBidder()
  .subscribe((data: LiveBidsForBidder[]) => { // hold the data of DB into this data array
                  this.liveBidsForBidder = data; //copy data array into depts array
                  this.tempLiveBidsForBidder = data; //copy it to tempDeps array also
                 // console.log(this.tempDepts);
                  console.log(this.liveBidsForBidder);
              }, (err) => {
                  console.log(err);
              });
  }
  // placeBid(){
   
  //   let bid = new LiveBid();
    
  //   bid. = book;
  //   item.quantity = 1;
  //   cart.items.push(item);
  //   alert("Bid is added successfully...");
  // }
}

  