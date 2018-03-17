package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;

import com.webapp.model.Count;

public interface CountDAO extends CrudRepository<Count, Long>{

}
