package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public UndyedYarnPurchase findByUPYId(Long upyId) {
		return undyedYarnPurchaseDAO.findByUpyId(upyId);
	}

}
