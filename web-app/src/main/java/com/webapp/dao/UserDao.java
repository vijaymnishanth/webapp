package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;

import com.webapp.model.User;

public interface UserDao extends CrudRepository<User, Long> {

	public User findByUserName(String userName);
	
	public User findByUserId(Long id);
}
