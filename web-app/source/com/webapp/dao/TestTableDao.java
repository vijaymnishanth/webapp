package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.webapp.modal.TestTable;
@Repository
public interface TestTableDao extends CrudRepository<TestTable, Integer> {

}
