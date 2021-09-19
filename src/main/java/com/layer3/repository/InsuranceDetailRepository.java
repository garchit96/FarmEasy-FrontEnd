package com.layer3.repository;

import java.util.List;

import com.layer2.entity.InsuranceDetail;

public interface InsuranceDetailRepository {
	
	List<InsuranceDetail> getAllInsuranceDetails();
	
	InsuranceDetail getInsuranceDetail(int policyNumber);
	
	void addInsuranceDetail(InsuranceDetail insureDet);

}
