package com.layer3.repository;

import java.util.List;

import com.layer2.entity.SellRequest;

public interface SellRequestRepository {

	List<SellRequest> getAllSellRequests();
	
	SellRequest getSellRequest(int sellId);
	
	void addSellRequest(SellRequest sellReq);
	
	void updateSellRequest(SellRequest sellReq);
	
	void deleteSellRequest(int sellId);
}
