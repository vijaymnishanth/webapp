package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class DyeingOrder {

	@Id
	@SequenceGenerator(name="ORD_SEQ", allocationSize=1, initialValue = 100000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="ORD_SEQ")
	private Long dyeingOrderId;
	
	private String dyeingOrderNo;
	
	private Date orderDate;
	
	@ManyToOne(optional = true)
    @JoinColumn(name="shadeId")
	private Shade shade;
	
	private Long countId;
	
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

	public Long getCountId() {
		return countId;
	}

	public void setCountId(Long countId) {
		this.countId = countId;
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
	
	
	
}
