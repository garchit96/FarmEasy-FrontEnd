package com.layer3.repository;

import java.util.List;

import com.layer2.entity.BankDetail;

public interface BankDetailRepository {
	
	List <BankDetail> getAllBankDetails();
	
	BankDetail getBankDetail(int accountId);
	
	void addBankDetail(BankDetail bankDet);
	void updateBankDetail(BankDetail bankDet);
	void deleteBankDetail(int accountId);
	

}
