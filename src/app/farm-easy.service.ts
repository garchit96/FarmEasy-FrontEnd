import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmerDetail } from 'src/FarmerDetail';
import { Observable } from 'rxjs';
import { Farmerlogin } from 'src/Farmerlogin';
import { BidderLogin } from 'src/BidderLogin';
import { BidderDetail } from 'src/BidderDetail';
import { SellRequest } from 'src/SellRequest';
import { ViewSoldHistory } from 'src/ViewSoldHistory';
import { LiveBidsForBidder } from './LiveBidsForBidder';
import { InsuranceDetail } from 'src/InsuranceDetail';
import { LiveBid } from 'src/LiveBid';

@Injectable({
  providedIn: 'root'
})
export class FarmEasyService {

  baseUrl: string = 'http://localhost:8080/';
  constructor(private myhttp:HttpClient) { }

  findFarmer(farmerEmail: string): Observable<FarmerDetail> 
  {
    return this.myhttp.get<FarmerDetail>(this.baseUrl + "getFarmer/" + farmerEmail);
  }

  findAllFarmers() : Observable<FarmerDetail[]>
  {
    return this.myhttp.get<FarmerDetail[]>(this.baseUrl+"getFarmers/");
  }

  addNewFarmer(newFarmer: FarmerDetail): Observable<FarmerDetail>
  {
    return this.myhttp.post<FarmerDetail>(this.baseUrl+"addFarmer",newFarmer);
  }

  farmerLogin(flogin: Farmerlogin)
  {
      return this.myhttp.post<any>(this.baseUrl+"isFarmerPresent",flogin);
  }

  bidderLogin(blogin: BidderLogin)
  {
      return this.myhttp.post<any>(this.baseUrl+"isBidderPresent",blogin);
  }

  addNewBidder(newBidder: BidderDetail): Observable<BidderDetail>
  {
    return this.myhttp.post<BidderDetail>(this.baseUrl+"addBidder",newBidder);
  }

  addNewSellRequest(newSellRequest: SellRequest): Observable<SellRequest>
  {
    return this.myhttp.post<SellRequest>(this.baseUrl+"addSellRequest",newSellRequest);
  }

  viewSoldHistory(farmerEmail:string) : Observable<ViewSoldHistory[]>
  {
    return this.myhttp.get<ViewSoldHistory[]>(this.baseUrl+"viewSoldHistory/"+ farmerEmail);
  }

  modifyFarmerPassword(existingEmail: FarmerDetail): Observable<FarmerDetail>
  {
    return this.myhttp.put<FarmerDetail>(this.baseUrl + "setNewFarmerPassword/", existingEmail);
  }

  modifyBidderPassword(existingEmail: BidderDetail): Observable<BidderDetail>
  {
    return this.myhttp.put<BidderDetail>(this.baseUrl + "setNewBidderPassword/", existingEmail);
  }
  liveBidsForBidder() : Observable<LiveBidsForBidder[]>
  {
    return this.myhttp.get<LiveBidsForBidder[]>(this.baseUrl+"bidsAvailableForBidder/");
  }
  addNewInsurance(newInsurance: InsuranceDetail): Observable<InsuranceDetail>
  {
    return this.myhttp.post<InsuranceDetail>(this.baseUrl+"addInsurance",newInsurance);
  }

  addBid(bidObj: LiveBid): Observable<LiveBid>
  {
    return this.myhttp.post<LiveBid>(this.baseUrl+"addNewBid",bidObj);
  }

  
  findAllLiveBids() : Observable<LiveBid[]>
  {
    return this.myhttp.get<LiveBid[]>(this.baseUrl+"getBids/");
  }
  findMaxBid(sellId: any): Observable<LiveBid[]> 
  {
    return this.myhttp.post<LiveBid[]>(this.baseUrl + "getMaxLiveBid/", sellId);
  }
  findsellRequest(farmerEmail:string): Observable<SellRequest> 
  {
    return this.myhttp.get<SellRequest>(this.baseUrl + "sellRequestDetails/" + farmerEmail);
  }

  modifyBidderAmt(bidId: LiveBid): Observable<LiveBid>
  {
    return this.myhttp.put<LiveBid>(this.baseUrl + "updateBid/", bidId);
  }
  findBidsForSellId(sellId: any): Observable<LiveBid[]> 
  {
    return this.myhttp.post<LiveBid[]>(this.baseUrl + "bidsForSellId/", sellId);
  }
 }
