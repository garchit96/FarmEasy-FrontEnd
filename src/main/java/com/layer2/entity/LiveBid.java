package com.layer2.entity;


import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the LIVE_BID database table.
 * 
 */
@Entity
@Table(name="LIVE_BID")
public class LiveBid  {

	@Id
	@GeneratedValue
	@Column(name="BID_ID")
	private int bidId;

	@Temporal(TemporalType.DATE)
	@Column(name="BID_REQ_DATE")
	private Date bidReqDate;

	@Column(name="BIDDER_AMT")
	private double bidderAmt;

	@Column(name="SELL_ID")
	private int sellId;

	//bi-directional many-to-one association to BidderDetail
	@ManyToOne
	@JoinColumn(name="BIDDER_EMAIL")
	private BidderDetail bidderDetail;

	public LiveBid(int bidId, Date bidReqDate, double bidderAmt, int sellId, BidderDetail bidderDetail) {
		super();
		this.bidId = bidId;
		this.bidReqDate = bidReqDate;
		this.bidderAmt = bidderAmt;
		this.sellId = sellId;
		this.bidderDetail = bidderDetail;
	}

	public LiveBid() {
	}

	public int getBidId() {
		return this.bidId;
	}

	public void setBidId(int bidId) {
		this.bidId = bidId;
	}

	public Date getBidReqDate() {
		return this.bidReqDate;
	}

	public void setBidReqDate(Date bidReqDate) {
		this.bidReqDate = bidReqDate;
	}

	public double getBidderAmt() {
		return this.bidderAmt;
	}

	public void setBidderAmt(double bidderAmt) {
		this.bidderAmt = bidderAmt;
	}

	public int getSellId() {
		return this.sellId;
	}

	public void setSellId(int sellId) {
		this.sellId = sellId;
	}

	public BidderDetail getBidderDetail() {
		return this.bidderDetail;
	}

	public void setBidderDetail(BidderDetail bidderDetail) {
		this.bidderDetail = bidderDetail;
	}

	@Override
	public String toString() {
		return "LiveBid [bidId=" + bidId + ", bidReqDate=" + bidReqDate + ", bidderAmt=" + bidderAmt + ", sellId="
				+ sellId + ", bidderDetail=" + bidderDetail + "]";
	}

}