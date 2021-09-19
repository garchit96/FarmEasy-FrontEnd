import { BidderDetail } from "./BidderDetail";
import { SellRequest } from "./SellRequest";

export class LiveBid{

    bidId:number;
 	bidReqDate:Date ;
	bidderAmt:number;
	bidderDetail:BidderDetail;
	sellRequest:SellRequest;
}