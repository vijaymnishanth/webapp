package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;

import com.webapp.model.Token;

public interface TokenDao  extends CrudRepository<Token, Long>{

	public Token findByTokenKey(String tokenKey);
	
	public void deleteByUserId(Long userId);
}
