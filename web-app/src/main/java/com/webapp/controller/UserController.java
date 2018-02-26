package com.webapp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.exception.UserException;
import com.webapp.model.Token;
import com.webapp.model.User;
import com.webapp.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	static final Logger logger = Logger.getLogger(UserController.class); 

	@Autowired
	UserService userService;
	
	@RequestMapping(value = {"/login"}, method = RequestMethod.POST)
    public Token logIn(@RequestBody User user, HttpServletRequest request) throws UserException {
    	logger.info("Logging in ...");
    	HttpSession session;
    	Token token = userService.logIn(user);
    	if(token.getToken()!= null) {
    		session = request.getSession();
    		session.setAttribute("userId", token.getUserId());
    		session.setAttribute("token", token.getTokenKey() + ':' + token.getToken());
    	}
    	return token;
    }
}
