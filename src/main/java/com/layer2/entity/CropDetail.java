package com.layer2.entity;



import javax.persistence.*;
import java.util.List;



/**
 * The persistent class for the CROP_DETAILS database table.
 * 
 */
@Entity
@Table(name="CROP_DETAILS")
public class CropDetail  {

	@Id
	@GeneratedValue
	@Column(name="CROP_NAME", length=15)
	private String cropName;

	@Column(name="CROP_TYPE", length=15)
	private String cropType;

	private double msp;

	//bi-directional many-to-one association to SellRequest
	@OneToMany(mappedBy="cropDetail", fetch=FetchType.EAGER)
	private List<SellRequest> sellRequests;

	public CropDetail(String cropName, String cropType, double msp, List<SellRequest> sellRequests) {
		super();
		this.cropName = cropName;
		this.cropType = cropType;
		this.msp = msp;
		this.sellRequests = sellRequests;
	}

	public CropDetail() {
	}

	public String getCropName() {
		return this.cropName;
	}

	public void setCropName(String cropName) {
		this.cropName = cropName;
	}

	public String getCropType() {
		return this.cropType;
	}

	public void setCropType(String cropType) {
		this.cropType = cropType;
	}

	public double getMsp() {
		return this.msp;
	}

	public void setMsp(double msp) {
		this.msp = msp;
	}

	public List<SellRequest> getSellRequests() {
		return this.sellRequests;
	}

	public void setSellRequests(List<SellRequest> sellRequests) {
		this.sellRequests = sellRequests;
	}

	public SellRequest addSellRequest(SellRequest sellRequest) {
		getSellRequests().add(sellRequest);
		sellRequest.setCropDetail(this);

		return sellRequest;
	}

	public SellRequest removeSellRequest(SellRequest sellRequest) {
		getSellRequests().remove(sellRequest);
		sellRequest.setCropDetail(null);

		return sellRequest;
	}

	@Override
	public String toString() {
		return "CropDetail [cropName=" + cropName + ", cropType=" + cropType + ", msp=" + msp + ", sellRequests="
				+ sellRequests + "]";
	}

}