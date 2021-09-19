import { BidderDetail } from "./BidderDetail";
import { FarmerDetail } from "./FarmerDetail";

export class BankDetail{

        accountId : number;
		accountNum : string;
		ifscCode : string;
		bidderDetail: BidderDetail;
		farmerDetail : FarmerDetail;
}