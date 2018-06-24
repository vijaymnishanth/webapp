package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class DyeingOrderSummary {

	@Id
	private Long dyeingOrderId;
	
	private String dyeingOrderNo;
	
	private Date orderDate;
	
	private Long shadeId;
	
	private String shadeNo;
	
	private String shadeColour;
	
	private Long countId;
	
	private String count;
		
	private String description;
	
	private Long quantity;
	
	private String customer;

	private Long received;
	
	private Long balance;
	
	public Long getDyeingOrderId() {
		return dyeingOrderId;
	}

	public void setDyeingOrderId(Long dyeingOrderId) {
		this.dyeingOrderId = dyeingOrderId;
	}

	public String getDyeingOrderNo() {
		return dyeingOrderNo;
	}

	public void setDyeingOrderNo(String dyeingOrderNo) {
		this.dyeingOrderNo = dyeingOrderNo;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getShadeNo() {
		return shadeNo;
	}

	public void setShadeNo(String shadeNo) {
		this.shadeNo = shadeNo;
	}

	public String getShadeColour() {
		return shadeColour;
	}

	public void setShadeColour(String shadeColour) {
		this.shadeColour = shadeColour;
	}

	public Long getReceived() {
		return received;
	}

	public void setReceived(Long received) {
		this.received = received;
	}

	public Long getBalance() {
		return balance;
	}

	public void setBalance(Long balance) {
		this.balance = balance;
	}

	public Long getShadeId() {
		return shadeId;
	}

	public void setShadeId(Long shadeId) {
		this.shadeId = shadeId;
	}

	public Long getCountId() {
		return countId;
	}

	public void setCountId(Long countId) {
		this.countId = countId;
	}
	
	
}
