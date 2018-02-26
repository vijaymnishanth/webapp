package com.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Supplier {

	@Id
    @GeneratedValue
	private Long suppilerId;
	
	@Column(unique = true)
	private String supplierName;
	
	private String supplierDesc;

	public Long getSuppilerId() {
		return suppilerId;
	}

	public void setSuppilerId(Long suppilerId) {
		this.suppilerId = suppilerId;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getSupplierDesc() {
		return supplierDesc;
	}

	public void setSupplierDesc(String supplierDesc) {
		this.supplierDesc = supplierDesc;
	}
	
	
}
