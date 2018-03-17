package com.webapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Count {

	@Id
    @GeneratedValue
	private Long countId;
	
	private String count;
	
	private String countDesc;

	public Long getCountId() {
		return countId;
	}

	public void setCountId(Long countId) {
		this.countId = countId;
	}

	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}

	public String getCountDesc() {
		return countDesc;
	}

	public void setCountDesc(String countDesc) {
		this.countDesc = countDesc;
	}
		
}
