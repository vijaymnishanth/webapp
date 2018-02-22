package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;

import com.webapp.model.UndyedYarnPurchase;

public interface UndyedYarnPurchaseDAO extends CrudRepository<UndyedYarnPurchase, Long> {

	public UndyedYarnPurchase findByUpyId(Long upyId);
}
