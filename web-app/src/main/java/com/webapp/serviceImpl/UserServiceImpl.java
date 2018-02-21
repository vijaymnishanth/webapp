package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.webapp.dao.UserDao;
import com.webapp.exception.UserException;
import com.webapp.model.Token;
import com.webapp.model.User;
import com.webapp.service.TokenService;
import com.webapp.service.UserService;

@Service("UserService")
public class UserServiceImpl implements UserService {

	@Autowired	
	UserDao userDao;
	
	@Autowired	
	TokenService tokenService;
	
	public Token logIn(User user) throws UserException  {
		Token token = new Token();
		if(user !=null) {
		User userDetails = userDao.findByUserName(user.getUserName());
		if(userDetails!=null) {
			if(!user.getPassword().equals(userDetails.getPassword())) {
				throw new UserException("Incorrect Password");
			}
		}else {
			throw new UserException("Invalid User Name");
		}
		token =  tokenService.generateToken(userDetails);
	}
		return token;
	}

	@Override
	public User findByUserId(Long id) {
		return userDao.findByUserId(id);
	}
	
}
