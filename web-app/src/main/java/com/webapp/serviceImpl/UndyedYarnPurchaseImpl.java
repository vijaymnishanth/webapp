package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.dao.UndyedYarnPurchaseDAO;
import com.webapp.model.UndyedYarnPurchase;
import com.webapp.service.UndyedYarnPurchaseService;

@Service("UndyedYarnPurchaseService")

public class UndyedYarnPurchaseImpl implements UndyedYarnPurchaseService {

	@Autowired
	UndyedYarnPurchaseDAO undyedYarnPurchaseDAO;
	
	@Override
	public UndyedYarnPurchase saveUYP(UndyedYarnPurchase undyedYarnPurchase) {
		return undyedYarnPurchaseDAO.save(undyedYarnPurchase);
	}

	@Override
	public List<UndyedYarnPurchase> findAllUYP() {
		// TODO Auto-generated method stub
		List<UndyedYarnPurchase> uypList =  listIterator(undyedYarnPurchaseDAO.findAll());
		return uypList;
	}
	
	public static List<UndyedYarnPurchase> listIterator(Iterable<UndyedYarnPurchase> iterable){
		List<UndyedYarnPurchase> listObject = new ArrayList<UndyedYarnPurchase>();
		Iterator<UndyedYarnPurchase> iterator = iterable.iterator();
		while(iterator.hasNext()) {
			listObject.add(iterator.next());
		}
		
		return listObject;
	}

	@Override
	public UndyedYarnPurchase findByUYPId(Long upyId) {
		return undyedYarnPurchaseDAO.findByUypId(upyId);
	}
	
	
	@Override
	public void deleteUYP(List<Long> uypId) {
		 undyedYarnPurchaseDAO.deleteByUypIdIn(uypId);
	}

}
