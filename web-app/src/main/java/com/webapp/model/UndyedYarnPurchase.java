package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints={
	    @UniqueConstraint(columnNames = {"yarnTypeId", "yarnCountId","supplierId","purchaseDate","quantity"})
	}) 
public class UndyedYarnPurchase {

	@Id
    @GeneratedValue
	private Long uypId;
	private Long yarnTypeId;
	private Long yarnCountId;
	private Long supplierId;
	private Date purchaseDate;
	private Long quantity;
	public Long getUypId() {
		return uypId;
	}
	public void setUypId(Long uypId) {
		this.uypId = uypId;
	}
	public Long getYarnTypeId() {
		return yarnTypeId;
	}
	public void setYarnTypeId(Long yarnTypeId) {
		this.yarnTypeId = yarnTypeId;
	}
	public Long getYarnCountId() {
		return yarnCountId;
	}
	public void setYarnCountId(Long yarnCountId) {
		this.yarnCountId = yarnCountId;
	}

	public Long getSupplierId() {
		return supplierId;
	}
	public void setSupplierId(Long supplierId) {
		this.supplierId = supplierId;
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
	
	
	
}
