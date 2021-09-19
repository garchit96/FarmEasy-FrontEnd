package com.layer3.repository;

import java.util.List;

import com.layer2.entity.CropDetail;

public interface CropDetailRepository {
	
	List <CropDetail> getAllCropDetails();
	
	CropDetail getCropDetail(String cropName);
	
	void addCropDetail(CropDetail cropDet);
	
	void updateCropDetail(CropDetail cropDet);
	

}
