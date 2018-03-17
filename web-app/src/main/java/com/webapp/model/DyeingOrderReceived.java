package com.webapp.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DyeingOrderReceived {

	@Id
    @GeneratedValue
	private Long dorId;
	
	private Long dyeingOrderId;
	
	private Date receivedDate;
	
	private Long receivedQuantity;
	
	private String dyeingChallanNo;

	public Long getDorId() {
		return dorId;
	}

	public void setDorId(Long dorId) {
		this.dorId = dorId;
	}

	public Long getDyeingOrderId() {
		return dyeingOrderId;
	}

	public void setDyeingOrderId(Long dyeingOrderId) {
		this.dyeingOrderId = dyeingOrderId;
	}

	
	public Date getReceivedDate() {
		return receivedDate;
	}

	public void setReceivedDate(Date receivedDate) {
		this.receivedDate = receivedDate;
	}

	public Long getReceivedQuantity() {
		return receivedQuantity;
	}

	public void setReceivedQuantity(Long receivedQuantity) {
		this.receivedQuantity = receivedQuantity;
	}

	public String getDyeingChallanNo() {
		return dyeingChallanNo;
	}

	public void setDyeingChallanNo(String dyeingChallanNo) {
		this.dyeingChallanNo = dyeingChallanNo;
	}

		
}
