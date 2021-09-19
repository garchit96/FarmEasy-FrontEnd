package com.layer2.entity;


import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the FARMER_DETAILS database table.
 * 
 */
@Entity
@Table(name="FARMER_DETAILS")
public class FarmerDetail  {

	@Id
	@GeneratedValue
	@Column(name="FARMER_EMAIL", length=20)
	private String farmerEmail;

	@Column(name="AADHAR_NUMBER", length=15)
	private String aadharNumber;

	@Column(name="CONTACT_NUM", length=10)
	private String contactNum;

	@Column(name="FARMER_NAME", length=15)
	private String farmerName;

	@Column(name="PANCARD_NUMBER", length=15)
	private String pancardNumber;
    @Column(length=10)
	private String password;

	@Column(name="SOIL_PH_CERT", length=15)
	private String soilPhCert;

	//bi-directional many-to-one association to FarmerLandDetail
	@OneToMany(mappedBy="farmerDetail", fetch=FetchType.EAGER)
	private List<FarmerLandDetail> farmerLandDetails;

	//bi-directional many-to-one association to InsuranceForm
	@OneToMany(mappedBy="farmerDetail", fetch=FetchType.EAGER)
	private List<InsuranceDetail> insuranceDetails;

	//bi-directional many-to-one association to SellRequest
	@OneToMany(mappedBy="farmerDetail", fetch=FetchType.EAGER)
	private List<SellRequest> sellRequests;

	//bi-directional one-to-one association to AddressDetail
	@OneToOne
	@JoinColumn(name="ADDRESS_ID")
	private AddressDetail addressDetail;

	//bi-directional one-to-one association to BankDetail
	@OneToOne
	@JoinColumn(name="ACCOUNT_ID")
	private BankDetail bankDetail;
    
	public FarmerDetail(String farmerEmail, String aadharNumber, String contactNum, String farmerName,
			String pancardNumber, String password, String soilPhCert, List<FarmerLandDetail> farmerLandDetails,
			List<InsuranceDetail> insuranceDetails, List<SellRequest> sellRequests, AddressDetail addressDetail,
			BankDetail bankDetail) {
		super();
		this.farmerEmail = farmerEmail;
		this.aadharNumber = aadharNumber;
		this.contactNum = contactNum;
		this.farmerName = farmerName;
		this.pancardNumber = pancardNumber;
		this.password = password;
		this.soilPhCert = soilPhCert;
		this.farmerLandDetails = farmerLandDetails;
		this.insuranceDetails = insuranceDetails;
		this.sellRequests = sellRequests;
		this.addressDetail = addressDetail;
		this.bankDetail = bankDetail;
	}

	public FarmerDetail() {
	}

	public String getFarmerEmail() {
		return farmerEmail;
	}

	public void setFarmerEmail(String farmerEmail) {
		this.farmerEmail = farmerEmail;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getContactNum() {
		return contactNum;
	}

	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
	}

	public String getPancardNumber() {
		return pancardNumber;
	}

	public void setPancardNumber(String pancardNumber) {
		this.pancardNumber = pancardNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSoilPhCert() {
		return soilPhCert;
	}

	public void setSoilPhCert(String soilPhCert) {
		this.soilPhCert = soilPhCert;
	}

	public List<FarmerLandDetail> getFarmerLandDetails() {
		return farmerLandDetails;
	}

	public void setFarmerLandDetails(List<FarmerLandDetail> farmerLandDetails) {
		this.farmerLandDetails = farmerLandDetails;
	}

	public List<InsuranceDetail> getInsuranceDetails() {
		return insuranceDetails;
	}

	public void setInsuranceDetails(List<InsuranceDetail> insuranceDetails) {
		this.insuranceDetails = insuranceDetails;
	}

	public List<SellRequest> getSellRequests() {
		return sellRequests;
	}

	public void setSellRequests(List<SellRequest> sellRequests) {
		this.sellRequests = sellRequests;
	}

	public AddressDetail getAddressDetail() {
		return addressDetail;
	}

	public void setAddressDetail(AddressDetail addressDetail) {
		this.addressDetail = addressDetail;
	}

	public BankDetail getBankDetail() {
		return bankDetail;
	}

	public void setBankDetail(BankDetail bankDetail) {
		this.bankDetail = bankDetail;
	}

	@Override
	public String toString() {
		return "FarmerDetail [farmerEmail=" + farmerEmail + ", aadharNumber=" + aadharNumber + ", contactNum="
				+ contactNum + ", farmerName=" + farmerName + ", pancardNumber=" + pancardNumber + ", password="
				+ password + ", soilPhCert=" + soilPhCert + ", farmerLandDetails=" + farmerLandDetails
				+ ", insuranceDetails=" + insuranceDetails + ", sellRequests=" + sellRequests + ", addressDetail="
				+ addressDetail + ", bankDetail=" + bankDetail + "]";
	}

	

}