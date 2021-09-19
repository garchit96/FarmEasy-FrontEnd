package com.layer2.entity;


import javax.persistence.*;

import java.util.Date;


/**
 * The persistent class for the INSURANCE_FORM database table.
 * 
 */
@Entity
@Table(name="INSURANCE_DETAILS")
public class InsuranceDetail  {

	@Id
	@GeneratedValue
	@Column(name="POLICY_NUM")
	private int policyNum;

	@Column(name="CROP_NAME", length=15)
	private String cropName;

	@Temporal(TemporalType.DATE)
	@Column(name="END_DATE")
	private Date endDate;

	@Column(name="INSURANCE_COMP", length=15)
	private String insuranceComp;

	@Temporal(TemporalType.DATE)
	@Column(name="INSURANCE_DATE")
	private Date insuranceDate;

	@Column(name="INSUREE_NAME", length=15)
	private String insureeName;

	@Column(name="LOSS_CAUSE", length=20)
	private String lossCause;

	@Temporal(TemporalType.DATE)
	@Column(name="LOSS_DATE")
	private Date lossDate;

	@Column(name="PREMIUM_AMT")
	private double premiumAmt;

	@Column(name="SHARE_PREMIUM")
	private double sharePremium;

	@Column(name="TOT_SUM_INSURED")
	private double totSumInsured;

	//bi-directional many-to-one association to FarmerDetail
	@ManyToOne
	@JoinColumn(name="FARMER_EMAIL")
	private FarmerDetail farmerDetail;

	public InsuranceDetail(int policyNum, String cropName, Date endDate, String insuranceComp, Date insuranceDate,
			String insureeName, String lossCause, Date lossDate, double premiumAmt, double sharePremium,
			double totSumInsured, FarmerDetail farmerDetail) {
		super();
		this.policyNum = policyNum;
		this.cropName = cropName;
		this.endDate = endDate;
		this.insuranceComp = insuranceComp;
		this.insuranceDate = insuranceDate;
		this.insureeName = insureeName;
		this.lossCause = lossCause;
		this.lossDate = lossDate;
		this.premiumAmt = premiumAmt;
		this.sharePremium = sharePremium;
		this.totSumInsured = totSumInsured;
		this.farmerDetail = farmerDetail;
	}

	public InsuranceDetail() {
	}

	public int getPolicyNum() {
		return this.policyNum;
	}

	public void setPolicyNum(int policyNum) {
		this.policyNum = policyNum;
	}

	public String getCropName() {
		return this.cropName;
	}

	public void setCropName(String cropName) {
		this.cropName = cropName;
	}

	public Date getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getInsuranceComp() {
		return this.insuranceComp;
	}

	public void setInsuranceComp(String insuranceComp) {
		this.insuranceComp = insuranceComp;
	}

	public Date getInsuranceDate() {
		return this.insuranceDate;
	}

	public void setInsuranceDate(Date insuranceDate) {
		this.insuranceDate = insuranceDate;
	}

	public String getInsureeName() {
		return this.insureeName;
	}

	public void setInsureeName(String insureeName) {
		this.insureeName = insureeName;
	}

	public String getLossCause() {
		return this.lossCause;
	}

	public void setLossCause(String lossCause) {
		this.lossCause = lossCause;
	}

	public Date getLossDate() {
		return this.lossDate;
	}

	public void setLossDate(Date lossDate) {
		this.lossDate = lossDate;
	}

	public double getPremiumAmt() {
		return this.premiumAmt;
	}

	public void setPremiumAmt(double premiumAmt) {
		this.premiumAmt = premiumAmt;
	}

	public double getSharePremium() {
		return this.sharePremium;
	}

	public void setSharePremium(double sharePremium) {
		this.sharePremium = sharePremium;
	}

	public double getTotSumInsured() {
		return this.totSumInsured;
	}

	public void setTotSumInsured(double totSumInsured) {
		this.totSumInsured = totSumInsured;
	}

	public FarmerDetail getFarmerDetail() {
		return this.farmerDetail;
	}

	public void setFarmerDetail(FarmerDetail farmerDetail) {
		this.farmerDetail = farmerDetail;
	}

	@Override
	public String toString() {
		return "InsuranceForm [policyNum=" + policyNum + ", cropName=" + cropName + ", endDate=" + endDate
				+ ", insuranceComp=" + insuranceComp + ", insuranceDate=" + insuranceDate + ", insureeName="
				+ insureeName + ", lossCause=" + lossCause + ", lossDate=" + lossDate + ", premiumAmt=" + premiumAmt
				+ ", sharePremium=" + sharePremium + ", totSumInsured=" + totSumInsured + ", farmerDetail="
				+ farmerDetail + "]";
	}

}