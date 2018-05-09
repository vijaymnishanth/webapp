package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints={
	    @UniqueConstraint(columnNames = {"yarnTypeId", "countId","supplier","purchaseDate","quantity"})
	}) 
public class UndyedYarnPurchase {

	@Id
    @GeneratedValue
	private Long uypId;
	
	@ManyToOne(optional = false)
    @JoinColumn(name="yarnTypeId")
	private YarnType yarnType;
	
	@ManyToOne(optional = false)
    @JoinColumn(name="countId")
	private Count count;
	
	private String supplier;
	
	private Date purchaseDate;
	
	private Long quantity;
	
	private String challanNo;
	
	public Long getUypId() {
		return uypId;
	}
	public void setUypId(Long uypId) {
		this.uypId = uypId;
	}

	public YarnType getYarnType() {
		return yarnType;
	}
	public void setYarnType(YarnType yarnType) {
		this.yarnType = yarnType;
	}
	public Count getCount() {
		return count;
	}
	public void setCount(Count count) {
		this.count = count;
	}
	public String getSupplier() {
		return supplier;
	}
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	public Date getPurchaseDate() {
		return purchaseDate;
	}
	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public String getChallanNo() {
		return challanNo;
	}
	public void setChallanNo(String challanNo) {
		this.challanNo = challanNo;
	}
		
	
}
