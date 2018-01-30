package com.webapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.exception.UserException;
import com.webapp.model.User;
import com.webapp.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	static final Logger logger = Logger.getLogger(UserController.class); 

	@Autowired
	UserService userService;
	
	@RequestMapping(value = {"/login"}, method = RequestMethod.POST)
    public User logIn(@RequestBody User user) throws UserException {
    	logger.info("Logging in ...");
    	if(user != null) {
    		user = userService.logIn(user);
    	}        
        return user;
    }
}
