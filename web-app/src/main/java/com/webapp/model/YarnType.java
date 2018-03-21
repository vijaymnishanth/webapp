package com.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class YarnType {

	@Id
    @GeneratedValue
	private Long yarnTypeId;
	
	@Column(unique = true)
	private String yarnType;
	
	private String yarnTypeDesc;

	public Long getYarnTypeId() {
		return yarnTypeId;
	}

	public void setYarnTypeId(Long yarnTypeId) {
		this.yarnTypeId = yarnTypeId;
	}

	public String getYarnType() {
		return yarnType;
	}

	public void setYarnType(String yarnType) {
		this.yarnType = yarnType;
	}

	public String getYarnTypeDesc() {
		return yarnTypeDesc;
	}

	public void setYarnTypeDesc(String yarnTypeDesc) {
		this.yarnTypeDesc = yarnTypeDesc;
	}

	
}
