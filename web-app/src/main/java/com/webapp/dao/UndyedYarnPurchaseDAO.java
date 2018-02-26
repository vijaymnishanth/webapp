package com.webapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.model.UndyedYarnPurchase;

public interface UndyedYarnPurchaseDAO extends CrudRepository<UndyedYarnPurchase, Long> {

	public UndyedYarnPurchase findByUypId(Long upyId);
	
	@Transactional()
	public void deleteByUypIdIn(List<Long> uypId);
}
