package com.webapp.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.model.DyeingOrder;;

public interface DyeingOrderDAO extends CrudRepository<DyeingOrder, Long> {

	@Transactional()
	public void deleteByDyeingOrderId(List<Long> dyeingOrderId);
}
