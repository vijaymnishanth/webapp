package com.webapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Shade {

	@Id
    @GeneratedValue
	private Long shadeId;
	
	private String shadeNo;
	
	private String shadeColour;

	public Long getShadeId() {
		return shadeId;
	}

	public void setShadeId(Long shadeId) {
		this.shadeId = shadeId;
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
	
	
}
