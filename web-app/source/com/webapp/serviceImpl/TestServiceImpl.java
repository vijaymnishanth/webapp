package com.webapp.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.TestTableDao;
import com.webapp.exception.UserException;
import com.webapp.model.TestTable;
import com.webapp.service.TestService;
@Service("TestService")
public class TestServiceImpl implements TestService{

	@Autowired	
    TestTableDao testTableDao;
    
	public void test() throws UserException {
		TestTable tt = new TestTable();
		tt.setName("new");
		//tt.setId(1l);
		if(true) {
			throw new UserException("Error Test");
		}
		testTableDao.save(tt);
		
	}

}
