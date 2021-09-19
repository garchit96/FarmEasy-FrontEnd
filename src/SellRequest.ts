import { CropDetail } from "./CropDetail";
import { FarmerDetail } from "./FarmerDetail";

export class SellRequest
	{

        sellId:number;

        basePrice:number;

        fertilizer:string;

        quantityKg :string;
	
        sellReqDate :Date;
    
        sellReqStatus:string;

        soldDate:Date;
	    
        soldPrice:Date;
	
        totalPrice:number;

        cropDetail: CropDetail;
	 
        farmerDetail: FarmerDetail;


	}