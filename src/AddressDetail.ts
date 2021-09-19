import { BidderDetail } from "./BidderDetail";
import { FarmerDetail } from "./FarmerDetail";

export class AddressDetail{

    addressId: number;

	
	addressLine: string;
    
	city: string;

	pincode: number;

	
	state: string;

	
	farmerDetail: FarmerDetail;

	
	 bidderDetail: BidderDetail;

}