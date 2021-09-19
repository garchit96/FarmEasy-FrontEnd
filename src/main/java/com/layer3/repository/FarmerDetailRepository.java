package com.layer3.repository;

import java.util.List;

import com.layer2.entity.FarmerDetail;

public interface FarmerDetailRepository {
	
	List<FarmerDetail> getAllFarmerDetails();
	
	FarmerDetail getFarmerDetail(String farmerEmail);
	
	void addFarmerDetails(FarmerDetail farDet);
	
	void updateFarmerDetails(FarmerDetail farDet);
	
	void deleteFarmerDetails(String farmerEmail);
	

}
