package com.layer3.repository;

import java.util.List;

import com.layer2.entity.AddressDetail;


public interface AddressDetailRepository {

    List <AddressDetail> getAllAddressDetails();
	
    AddressDetail getAddressDetail(int addressId);
	
	void addAddressDetail(AddressDetail addrDet);
	void updateAddressDetail(AddressDetail addrDet);
	void deleteAddressDetail(int addressId);
}
