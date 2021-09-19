package com.layer3.repository;

import java.util.List;

import com.layer2.entity.LiveBid;

public interface LiveBidRepository {
	
	List<LiveBid> getAllLiveBids();
	
	LiveBid getLiveBid(int bidId);
	
	void addLiveBid(LiveBid bid);
	
	void updateLiveBid(LiveBid bid);
	
	void deleteLiveBid(int bidId);
	

}
