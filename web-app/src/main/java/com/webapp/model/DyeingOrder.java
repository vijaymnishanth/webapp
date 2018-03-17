package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class DyeingOrder {

	@Id
    @GeneratedValue
	private Long dyeingOrderId;
	
	private String dyeingOrderNo;
	
	private Date orderDate;
	
	@ManyToOne(optional = false)
    @JoinColumn(name="shadeId")
	private Shade shade;
	
	@ManyToOne(optional = false)
    @JoinColumn(name="countId")
	private Count count;
	
	private String description;
	
	private Long quantity;
	
	private String customer;

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

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Shade getShade() {
		return shade;
	}

	public void setShade(Shade shade) {
		this.shade = shade;
	}
	
	public Count getCount() {
		return count;
	}

	public void setCount(Count count) {
		this.count = count;
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

	@Override
	public String toString() {
		return "DyeingOrder [dyeingOrderId=" + dyeingOrderId + ", dyeingOrderNo=" + dyeingOrderNo + ", orderDate="
				+ orderDate + ", shade=" + shade + ", count=" + count + ", description=" + description + ", quantity="
				+ quantity + ", customer=" + customer + "]";
	}
	
	
			
}
