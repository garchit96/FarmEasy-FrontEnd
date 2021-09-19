import { AddressDetail } from "./AddressDetail";
import { BankDetail } from "./BankDetail";

export class BidderDetail{

    bidderEmail: string;
    aadharNumber: string;
    bidderName: string;
    contactNum: string;
    pancardNumber: string;
    password: string;
    traderLicense: string;
    bankDetail: BankDetail;
    addressDetail: AddressDetail;
   }