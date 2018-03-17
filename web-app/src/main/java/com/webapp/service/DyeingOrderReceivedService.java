package com.webapp.service;

import java.util.List;

import com.webapp.model.DyeingOrderReceived;

public interface DyeingOrderReceivedService {

	public List<DyeingOrderReceived> findDORByDOId(Long dyeingOrderId);
	public DyeingOrderReceived saveDOR(DyeingOrderReceived dyeingOrderReceived);
	public Long sumOfDyeingOrderReceived(Long dyeingOrderId);
	public void deleteDOR(List<Long> dorId);
	public Long countOfDOR(List<Long> dyeingOrderId);
}
