package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.DyeingOrderDAO;
import com.webapp.model.DyeingOrder;
import com.webapp.model.UndyedYarnPurchase;
import com.webapp.service.DyeingOrderService;

@Service("DyeingOrderService")
public class DyeingOrderServiceImpl implements DyeingOrderService{

	@Autowired	
	DyeingOrderDAO dyeingOrderDAO;
	
	@Override
	public DyeingOrder saveDyeingOrder(DyeingOrder dyeingOrder) {
		return dyeingOrderDAO.save(dyeingOrder);
	}

	@Override
	public List<DyeingOrder> findAllDyeingOrder() {
		List<DyeingOrder> listOrder = listIterator(dyeingOrderDAO.findAll());
		return listOrder;
	}
	public static List<DyeingOrder> listIterator(Iterable<DyeingOrder> iterable){
		List<DyeingOrder> listObject = new ArrayList<DyeingOrder>();
		Iterator<DyeingOrder> iterator = iterable.iterator();
		while(iterator.hasNext()) {
			listObject.add(iterator.next());
		}
		
		return listObject;
	}

}
