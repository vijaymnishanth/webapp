package com.webapp.service;

import com.webapp.exception.UserException;
import com.webapp.model.User;

public interface UserService {

	public User logIn(User user) throws UserException;
}
