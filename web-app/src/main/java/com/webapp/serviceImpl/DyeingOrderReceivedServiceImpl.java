package com.webapp.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.DyeingOrderReceivedDAO;
import com.webapp.model.DyeingOrderReceived;
import com.webapp.service.DyeingOrderReceivedService;

@Service("DyeingOrderReceivedService")
public class DyeingOrderReceivedServiceImpl implements DyeingOrderReceivedService {

	@Autowired	
	DyeingOrderReceivedDAO dyeingOrderReceivedDAO;
	
	@Override
	public List<DyeingOrderReceived> findDORByDOId(Long dyeingOrderId) {
		// TODO Auto-generated method stub
		return dyeingOrderReceivedDAO.findByDyeingOrderId(dyeingOrderId);
	}

	@Override
	public DyeingOrderReceived saveDOR(DyeingOrderReceived dyeingOrderReceived) {
		return dyeingOrderReceivedDAO.save(dyeingOrderReceived);
	}

	@Override
	public Long sumOfDyeingOrderReceived(Long dyeingOrderId) {
		return dyeingOrderReceivedDAO.findSUMOfOrderReveived(dyeingOrderId);
	}

	@Override
	public void deleteDOR(List<Long> dorId) {
		dyeingOrderReceivedDAO.deleteByDorIdIn(dorId);		
	}

	@Override
	public Long countOfDOR(List<Long> dyeingOrderId) {
		return dyeingOrderReceivedDAO.countByDyeingOrderIdIn(dyeingOrderId);
	}

}
