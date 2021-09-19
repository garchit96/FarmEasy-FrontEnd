import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiveBid } from 'src/LiveBid';
import { SellRequest } from 'src/SellRequest';
import { FarmEasyService } from '../farm-easy.service';

@Component({
  selector: 'app-view-market-place',
  templateUrl: './view-market-place.component.html',
  styleUrls: ['./view-market-place.component.css']
})
export class ViewMarketPlaceComponent implements OnInit {
  maxBid:any;
  prevBid:any;
  data1:any;
  tempBidObj:LiveBid[];
  tempsellReq:SellRequest;
  gSellId:number;


  sellObj:SellRequest;
  bidObj: LiveBid[];
  maxObj:LiveBid[];
  
  tempMaxObj:LiveBid[];
  private subscription: Subscription;


  constructor(private farmEasyServ: FarmEasyService) { }
  // this.subscription=this.farmEasyService.findAllFarmers().subscribe((data:FarmerDetail[])=>{this.farmerDetail=data;
  //   // console.log(data);
  //     this.tempFarmerDetail=data;
  //   console.log(this.farmerDetail)},
  //   (err)=>{console.log(err);
  //   })
  // }
  ngOnInit() {

    this.viewSellRequest();
    
    // this.viewLiveBids();
     
     //this.viewMaxBids();

     
     

     
  }

  viewSellRequest(){
    // this.data1=this.farmEasyServ.findsellRequest(this.sellObj.sellId);
    console.log(sessionStorage.getItem('femail'));
    this.subscription=this.farmEasyServ.findsellRequest(sessionStorage.getItem('femail')).subscribe((data:SellRequest)=>
    {this.sellObj=data;
      this.tempsellReq=data;
      console.log(this.tempsellReq.sellId);
      // if(this.tempsellReq){
       this.viewMaxBids(this.tempsellReq[0].sellId);
       this.viewLiveBids(this.tempsellReq[0].sellId);

     // alert(this.tempsellReq.sellId);
      console.log(data.sellId);
      console.log(this.sellObj)},
      (err)=>{console.log(err);
      })
    
    

  }
  

  viewMaxBids(id){
    console.log(this.tempsellReq.sellId);
    let payload = { 
      'sellId': id
    }
 // this.maxBid=this.farmEasyServ.findMaxBid(this.sellObj.sellId);
  this.subscription=this.farmEasyServ.findMaxBid(payload).subscribe((data:LiveBid[])=>{
   
    this.maxObj=data;
  

  this.tempMaxObj=data;
//  console.log(this.tempMaxObj[0]);
  console.log(this.maxObj)},
  (err)=>
  {console.log(err);
  })
}


  viewLiveBids(sid){
    // this.subscription=this.farmEasyServ.findAllLiveBids().subscribe((data:LiveBid[])=>{this.bidObj=data;
    //   this.tempBidObj=data;
    //   console.log(this.bidObj)},
    console.log(this.tempsellReq.sellId);
    let payload = { 
      'sellId': sid
    }
    this.subscription=this.farmEasyServ.findBidsForSellId(payload).subscribe((data:LiveBid[])=>{this.bidObj=data;
      this.tempBidObj=data;
       console.log(this.bidObj)},
      (err)=>{console.log(err);
         })
         }
        }
      //    .subscribe((data: Book[]) => {
      //     this.books = data;
      // }, (err) => {
      //     console.log(err);
      // });
  
      
    
 

