package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.webapp.model.TestTable;
@Repository
public interface TestTableDao extends CrudRepository<TestTable, Integer> {

}
