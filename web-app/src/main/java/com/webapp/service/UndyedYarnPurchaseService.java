package com.webapp.service;

import java.util.List;

import com.webapp.model.UndyedYarnPurchase;

public interface UndyedYarnPurchaseService {

	public UndyedYarnPurchase saveUYP(UndyedYarnPurchase undyedYarnPurchase);
	
	public List<UndyedYarnPurchase> findAllUYP();
	
	public UndyedYarnPurchase findByUPYId(Long upyId);
}
