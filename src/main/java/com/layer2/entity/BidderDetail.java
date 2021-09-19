package com.layer2.entity;



import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the BIDDER_DETAILS database table.
 * 
 */
@Entity
@Table(name="BIDDER_DETAILS")
public class BidderDetail  {
	@Id
	@GeneratedValue
	@Column(name="BIDDER_EMAIL", length=20)
	private String bidderEmail;

	@Column(name="AADHAR_NUMBER", length=15)
	private String aadharNumber;

	@Column(name="BIDDER_NAME", length=15)
	private String bidderName;

	@Column(name="CONTACT_NUM", length=10)
	private String contactNum;

	@Column(name="PANCARD_NUMBER", length=15)
	private String pancardNumber;

	private String password;

	@Column(name="TRADER_LICENSE", length=15)
	private String traderLicense;

	//bi-directional many-to-one association to LiveBid
	@OneToMany(mappedBy="bidderDetail", fetch=FetchType.EAGER)
	private List<LiveBid> liveBids;

	//bi-directional one-to-one association to BankDetail
	@OneToOne
	@JoinColumn(name="ACCOUNT_ID")
	private BankDetail bankDetail;

	//bi-directional one-to-one association to AddressDetail
	@OneToOne
	@JoinColumn(name="ADDRESS_ID")
	private AddressDetail addressDetail;

	
	public BidderDetail(String bidderEmail, String aadharNumber, String bidderName, String contactNum,
			String pancardNumber, String password, String traderLicense, List<LiveBid> liveBids, BankDetail bankDetail,
			AddressDetail addressDetail) {
		super();
		this.bidderEmail = bidderEmail;
		this.aadharNumber = aadharNumber;
		this.bidderName = bidderName;
		this.contactNum = contactNum;
		this.pancardNumber = pancardNumber;
		this.password = password;
		this.traderLicense = traderLicense;
		this.liveBids = liveBids;
		this.bankDetail = bankDetail;
		this.addressDetail = addressDetail;
	}

	public BidderDetail() {
	}

	public String getBidderEmail() {
		return this.bidderEmail;
	}

	public void setBidderEmail(String bidderEmail) {
		this.bidderEmail = bidderEmail;
	}

	public String getAadharNumber() {
		return this.aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getBidderName() {
		return this.bidderName;
	}

	public void setBidderName(String bidderName) {
		this.bidderName = bidderName;
	}

	public String getContactNum() {
		return this.contactNum;
	}

	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}

	public String getPancardNumber() {
		return this.pancardNumber;
	}

	public void setPancardNumber(String pancardNumber) {
		this.pancardNumber = pancardNumber;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTraderLicense() {
		return this.traderLicense;
	}

	public void setTraderLicense(String traderLicense) {
		this.traderLicense = traderLicense;
	}

	public List<LiveBid> getLiveBids() {
		return this.liveBids;
	}

	public void setLiveBids(List<LiveBid> liveBids) {
		this.liveBids = liveBids;
	}

	public LiveBid addLiveBid(LiveBid liveBid) {
		getLiveBids().add(liveBid);
		liveBid.setBidderDetail(this);

		return liveBid;
	}

	public LiveBid removeLiveBid(LiveBid liveBid) {
		getLiveBids().remove(liveBid);
		liveBid.setBidderDetail(null);

		return liveBid;
	}

	public BankDetail getBankDetail() {
		return this.bankDetail;
	}

	public void setBankDetail(BankDetail bankDetail) {
		this.bankDetail = bankDetail;
	}

	public AddressDetail getAddressDetail() {
		return this.addressDetail;
	}

	public void setAddressDetail(AddressDetail addressDetail) {
		this.addressDetail = addressDetail;
	}
	@Override
	public String toString() {
		return "BidderDetail [bidderEmail=" + bidderEmail + ", aadharNumber=" + aadharNumber + ", bidderName="
				+ bidderName + ", contactNum=" + contactNum + ", pancardNumber=" + pancardNumber + ", password="
				+ password + ", traderLicense=" + traderLicense + ", liveBids=" + liveBids + ", bankDetail="
				+ bankDetail + ", addressDetail=" + addressDetail + "]";
	}


}