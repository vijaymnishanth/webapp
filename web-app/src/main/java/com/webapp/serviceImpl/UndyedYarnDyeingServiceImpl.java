package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.UndyedYarnDyeingDAO;
import com.webapp.model.UndyedYarnDyeing;
import com.webapp.model.UndyedYarnPurchase;
import com.webapp.service.UndyedYarnDyeingService;

@Service("UndyedYarnDyeingService")
public class UndyedYarnDyeingServiceImpl implements UndyedYarnDyeingService {

	@Autowired
	UndyedYarnDyeingDAO undyedYarnDyeingDAO;
	
	@Override
	public UndyedYarnDyeing saveUYP(UndyedYarnDyeing undyedYarnDyeing) {
		return undyedYarnDyeingDAO.save(undyedYarnDyeing);
	}
	@Override
	public List<UndyedYarnDyeing> findAllUYD() {
		// TODO Auto-generated method stub
		return listIterator(undyedYarnDyeingDAO.findAll());
	}

	public static List<UndyedYarnDyeing> listIterator(Iterable<UndyedYarnDyeing> iterable){
		List<UndyedYarnDyeing> listObject = new ArrayList<UndyedYarnDyeing>();
		Iterator<UndyedYarnDyeing> iterator = iterable.iterator();
		while(iterator.hasNext()) {
			listObject.add(iterator.next());
		}
		
		return listObject;
	}
}
