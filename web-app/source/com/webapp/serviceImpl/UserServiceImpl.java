package com.webapp.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.UserDao;
import com.webapp.exception.UserException;
import com.webapp.model.User;
import com.webapp.service.UserService;

@Service("UserService")
public class UserServiceImpl implements UserService {

	@Autowired	
	UserDao userDao;
	
	public User logIn(User user) throws UserException  {
		User userDetails = userDao.findByUserName(user.getUserName());
		if(userDetails!=null) {
			if(!user.getPassword().equals(userDetails.getPassword())) {
				throw new UserException("Incorrect Password");
			}
		}else {
			throw new UserException("Invalid User Name");
		}
		return userDetails;
	}

}
