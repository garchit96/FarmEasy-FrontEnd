package com.layer2.entity;

import javax.persistence.*;



/**
 * The persistent class for the FARMER_LAND_DETAILS database table.
 * 
 */
@Entity
@Table(name="FARMER_LAND_DETAILS")
public class FarmerLandDetail  {

	@Id
	@GeneratedValue
	@Column(name="LAND_ADDRESS", length=20)
	private String landAddress;

	@Column(name="LAND_AREA")
	private double landArea;

	@Column(name="LAND_PINCODE")
	private int landPincode;

	//bi-directional many-to-one association to FarmerDetail
	@ManyToOne
	@JoinColumn(name="FARMER_EMAIL")
	private FarmerDetail farmerDetail;

	public FarmerLandDetail(String landAddress, double landArea, int landPincode, FarmerDetail farmerDetail) {
		super();
		this.landAddress = landAddress;
		this.landArea = landArea;
		this.landPincode = landPincode;
		this.farmerDetail = farmerDetail;
	}

	public FarmerLandDetail() {
	}

	public String getLandAddress() {
		return this.landAddress;
	}

	public void setLandAddress(String landAddress) {
		this.landAddress = landAddress;
	}

	public double getLandArea() {
		return this.landArea;
	}

	public void setLandArea(double landArea) {
		this.landArea = landArea;
	}

	public int getLandPincode() {
		return this.landPincode;
	}

	public void setLandPincode(int landPincode) {
		this.landPincode = landPincode;
	}

	public FarmerDetail getFarmerDetail() {
		return this.farmerDetail;
	}

	public void setFarmerDetail(FarmerDetail farmerDetail) {
		this.farmerDetail = farmerDetail;
	}

	@Override
	public String toString() {
		return "FarmerLandDetail [landAddress=" + landAddress + ", landArea=" + landArea + ", landPincode="
				+ landPincode + ", farmerDetail=" + farmerDetail + "]";
	}

}