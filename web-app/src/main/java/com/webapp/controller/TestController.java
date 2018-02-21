package com.webapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.exception.UserException;
import com.webapp.service.TestService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {
	static final Logger logger = Logger.getLogger(TestController.class); 
	
	@Autowired
	TestService testService;
	
	/*
     * This method will list all existing employees.
     */
    @RequestMapping(value = {"/name"}, method = RequestMethod.GET)
    public String listEmployees() throws UserException {
    	logger.info("Testing...");
        List<String> li = new ArrayList<String>();
        li.add("dsadasd");
        testService.test();
        JSONObject error = new JSONObject();
        try {
			error.put("message", "Incorrect password");
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        System.out.println(error.toString());
        
        return error.toString();
    }
}
