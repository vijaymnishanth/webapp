package com.webapp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.model.Token;

public interface TokenDao  extends CrudRepository<Token, Long>{

	public Token findByTokenKey(String tokenKey);
	
	@Transactional()
	public void deleteByUserId(Long userId);
}
