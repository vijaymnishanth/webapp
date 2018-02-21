package com.webapp.service;

import com.webapp.exception.UserException;
import com.webapp.model.Token;
import com.webapp.model.User;

public interface UserService {

	public Token logIn(User user) throws UserException;
	
	public User findByUserId(Long id);
}
