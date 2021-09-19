package com.layer2.entity;


import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the SELL_REQUEST database table.
 * 
 */
@Entity
@Table(name="SELL_REQUEST")
public class SellRequest  {

	@Id
	@GeneratedValue
	@Column(name="SELL_ID")
	private int sellId;

	@Column(name="BASE_PRICE")
	private double basePrice;
	
    @Column(length=20)
	private String fertilizer;

	@Column(name="QUANTITY_KG")
	private double quantityKg;

	@Temporal(TemporalType.DATE)
	@Column(name="SELLREQ_DATE")
	private Date sellreqDate;

	@Column(name="SELLREQ_STATUS", length=15)
	private String sellreqStatus;

	@Temporal(TemporalType.DATE)
	@Column(name="SOLD_DATE")
	private Date soldDate;

	@Column(name="SOLD_PRICE")
	private double soldPrice;

	@Column(name="TOTAL_PRICE")
	private double totalPrice;

	//bi-directional many-to-one association to CropDetail
	@ManyToOne
	@JoinColumn(name="CROP_NAME")
	private CropDetail cropDetail;

	//bi-directional many-to-one association to FarmerDetail
	@ManyToOne
	@JoinColumn(name="FARMER_EMAIL")
	private FarmerDetail farmerDetail;
    
	public SellRequest(int sellId, double basePrice, String fertilizer, double quantityKg, Date sellreqDate,
			String sellreqStatus, Date soldDate, double soldPrice, double totalPrice, CropDetail cropDetail,
			FarmerDetail farmerDetail) {
		super();
		this.sellId = sellId;
		this.basePrice = basePrice;
		this.fertilizer = fertilizer;
		this.quantityKg = quantityKg;
		this.sellreqDate = sellreqDate;
		this.sellreqStatus = sellreqStatus;
		this.soldDate = soldDate;
		this.soldPrice = soldPrice;
		this.totalPrice = totalPrice;
		this.cropDetail = cropDetail;
		this.farmerDetail = farmerDetail;
	}

	public SellRequest() {
	}

	public int getSellId() {
		return this.sellId;
	}

	public void setSellId(int sellId) {
		this.sellId = sellId;
	}

	public double getBasePrice() {
		return this.basePrice;
	}

	public void setBasePrice(double basePrice) {
		this.basePrice = basePrice;
	}

	public String getFertilizer() {
		return this.fertilizer;
	}

	public void setFertilizer(String fertilizer) {
		this.fertilizer = fertilizer;
	}

	public double getQuantityKg() {
		return this.quantityKg;
	}

	public void setQuantityKg(double quantityKg) {
		this.quantityKg = quantityKg;
	}

	public Date getSellreqDate() {
		return this.sellreqDate;
	}

	public void setSellreqDate(Date sellreqDate) {
		this.sellreqDate = sellreqDate;
	}

	public String getSellreqStatus() {
		return this.sellreqStatus;
	}

	public void setSellreqStatus(String sellreqStatus) {
		this.sellreqStatus = sellreqStatus;
	}

	public Date getSoldDate() {
		return this.soldDate;
	}

	public void setSoldDate(Date soldDate) {
		this.soldDate = soldDate;
	}

	public double getSoldPrice() {
		return this.soldPrice;
	}

	public void setSoldPrice(double soldPrice) {
		this.soldPrice = soldPrice;
	}

	public double getTotalPrice() {
		return this.totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public CropDetail getCropDetail() {
		return this.cropDetail;
	}

	public void setCropDetail(CropDetail cropDetail) {
		this.cropDetail = cropDetail;
	}

	public FarmerDetail getFarmerDetail() {
		return this.farmerDetail;
	}

	public void setFarmerDetail(FarmerDetail farmerDetail) {
		this.farmerDetail = farmerDetail;
	}

	@Override
	public String toString() {
		return "SellRequest [sellId=" + sellId + ", basePrice=" + basePrice + ", fertilizer=" + fertilizer
				+ ", quantityKg=" + quantityKg + ", sellreqDate=" + sellreqDate + ", sellreqStatus=" + sellreqStatus
				+ ", soldDate=" + soldDate + ", soldPrice=" + soldPrice + ", totalPrice=" + totalPrice + ", cropDetail="
				+ cropDetail + ", farmerDetail=" + farmerDetail + "]";
	}

}