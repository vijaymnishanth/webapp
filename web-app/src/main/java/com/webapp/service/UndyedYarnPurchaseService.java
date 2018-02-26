package com.webapp.service;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.model.UndyedYarnPurchase;

public interface UndyedYarnPurchaseService {

	public UndyedYarnPurchase saveUYP(UndyedYarnPurchase undyedYarnPurchase);
	
	public List<UndyedYarnPurchase> findAllUYP();
	
	public UndyedYarnPurchase findByUYPId(Long upyId);

	void deleteUYP(List<Long> uypId);
}
