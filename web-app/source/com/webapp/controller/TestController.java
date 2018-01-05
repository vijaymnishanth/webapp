package com.webapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
    public List<String> listEmployees() {
    	logger.info("Testing...");
        List<String> li = new ArrayList<String>();
        li.add("dsadasd");
        testService.test();
        
        return li;
    }
}
