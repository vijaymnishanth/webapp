package com.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class YarnCount {

	@Id
    @GeneratedValue
	private Long yarnCountId;
	
	@Column(unique = true)
	private String yarnCountName;
	
	private String yarnCountDesc;

	public Long getYarnCountId() {
		return yarnCountId;
	}

	public void setYarnCountId(Long yarnCountId) {
		this.yarnCountId = yarnCountId;
	}

	public String getYarnCountName() {
		return yarnCountName;
	}

	public void setYarnCountName(String yarnCountName) {
		this.yarnCountName = yarnCountName;
	}

	public String getYarnCountDesc() {
		return yarnCountDesc;
	}

	public void setYarnCountDesc(String yarnCountDesc) {
		this.yarnCountDesc = yarnCountDesc;
	}
		
}
