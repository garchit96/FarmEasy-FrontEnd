import { CropDetail } from "./CropDetail";
import { FarmerDetail } from "./FarmerDetail";

export class InsuranceDetail
	{

        policyNum:number;

        endDate:Date;

        insuranceComp:string;

        insuranceDate :Date;
	
        insureeName :string;
    
        lossCause:string;

        lossDate:Date;
	    
        premiumAmt:number;
	
        sharePremium:number;

        totSumInsured :number;
	 
        farmerDetail: FarmerDetail;

        cropDetail: CropDetail;


	}