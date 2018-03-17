package com.webapp.service;

import java.util.List;

import com.webapp.model.DyeingOrder;

public interface DyeingOrderService {

	public DyeingOrder saveDyeingOrder(DyeingOrder dyeingOrder);
	
	public List<DyeingOrder> findAllDyeingOrder();
	
	public void deleteDyeingOrder(List<Long> dyeingOrderId);
	
}
