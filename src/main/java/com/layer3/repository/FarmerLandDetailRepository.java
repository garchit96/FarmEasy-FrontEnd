package com.layer3.repository;

import java.util.List;

import com.layer2.entity.FarmerLandDetail;

public interface FarmerLandDetailRepository {
	
    List <FarmerLandDetail> getAllLandDetails();
	
    FarmerLandDetail getLandDetail(String landAddress);
	
	void addLandDetail(FarmerLandDetail landDet);
	void updateLandDetail(FarmerLandDetail landDet);
	void deleteLandDetail(String landAddress);

}
