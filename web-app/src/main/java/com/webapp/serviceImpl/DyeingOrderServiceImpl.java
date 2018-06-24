package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.DyeingOrderDAO;
import com.webapp.dao.DyeingOrderSummaryDAO;
import com.webapp.model.DyeingOrder;
import com.webapp.model.DyeingOrderSummary;
import com.webapp.service.DyeingOrderService;

@Service("DyeingOrderService")
public class DyeingOrderServiceImpl implements DyeingOrderService{

	@Autowired	
	DyeingOrderDAO dyeingOrderDAO;
	
	@Autowired	
	DyeingOrderSummaryDAO dyeingOrderSummaryDAO;
	
	@Override
	public DyeingOrder saveDyeingOrder(DyeingOrder dyeingOrder) {
		dyeingOrder = dyeingOrderDAO.save(dyeingOrder);
		dyeingOrder.setDyeingOrderNo("DO" + (dyeingOrder.getDyeingOrderId() + 5000));
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
	
	public static List<DyeingOrderSummary> listSummaryIterator(Iterable<DyeingOrderSummary> iterable){
		List<DyeingOrderSummary> listObject = new ArrayList<DyeingOrderSummary>();
		Iterator<DyeingOrderSummary> iterator = iterable.iterator();
		while(iterator.hasNext()) {
			listObject.add(iterator.next());
		}
		
		return listObject;
	}

	@Override
	public void deleteDyeingOrder(List<Long> dyeingOrderId) {
		dyeingOrderDAO.deleteByDyeingOrderId(dyeingOrderId);
	}

	@Override
	public List<DyeingOrderSummary> findAllDyeingOrderSummary() {
		List<DyeingOrderSummary> listOrder = listSummaryIterator(dyeingOrderSummaryDAO.findAll());
		return listOrder;
	}

}
