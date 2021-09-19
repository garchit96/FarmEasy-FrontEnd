package com.layer3.repository;

import java.util.List;

import com.layer2.entity.BidderDetail;


public interface BidderDetailRepository {
	
	List<BidderDetail> getAllBidderDetails();
	
	BidderDetail getBidderDetail(String bidderEmail);
	
	void addBidderDetails(BidderDetail bidDet);
	void updateBidderDetails(BidderDetail bidDet);
	
	void deleteBidderDetails(String bidderEmail);
	

}
