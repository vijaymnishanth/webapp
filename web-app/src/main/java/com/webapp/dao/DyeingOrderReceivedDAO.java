package com.webapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.model.DyeingOrderReceived;;

public interface DyeingOrderReceivedDAO extends CrudRepository<DyeingOrderReceived, Long>  {

	public List<DyeingOrderReceived> findByDyeingOrderId(Long dyeingOrderId);
	
	@Query("select SUM(dor.receivedQuantity) from DyeingOrderReceived dor where dor.dyeingOrderId= ?1")
	public Long findSUMOfOrderReveived(Long dyeingOrderId);
	
	@Transactional()
	public void deleteByDorIdIn(List<Long> dorId);

	public Long countByDyeingOrderIdIn(List<Long> dyeingOrderId);
}
