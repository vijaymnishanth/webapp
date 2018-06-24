package com.webapp.service;

import java.util.List;

import com.webapp.model.DyeingOrder;
import com.webapp.model.DyeingOrderSummary;

public interface DyeingOrderService {

	public DyeingOrder saveDyeingOrder(DyeingOrder dyeingOrder);
	
	public List<DyeingOrder> findAllDyeingOrder();
	
	public List<DyeingOrderSummary> findAllDyeingOrderSummary();
	
	public void deleteDyeingOrder(List<Long> dyeingOrderId);
	
}
