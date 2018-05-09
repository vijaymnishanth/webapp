package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class UndyedYarnDyeing {

	@Id
    @GeneratedValue
	private Long uydId;
	
	@ManyToOne(optional = false)
    @JoinColumn(name="yarnTypeId")
	private YarnType yarnType;
	
	@ManyToOne(optional = false)
    @JoinColumn(name="countId")
	private Count count;
	
	private Date purchaseDate;
	
	private Long quantity;
	
	private String dyeingDeliveryChallanNo;

	public Long getUydId() {
		return uydId;
	}

	public void setUydId(Long uydId) {
		this.uydId = uydId;
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

	public String getDyeingDeliveryChallanNo() {
		return dyeingDeliveryChallanNo;
	}

	public void setDyeingDeliveryChallanNo(String dyeingDeliveryChallanNo) {
		this.dyeingDeliveryChallanNo = dyeingDeliveryChallanNo;
	}
	
	
}
