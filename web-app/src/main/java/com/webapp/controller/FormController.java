package com.webapp.controller;

import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.model.UndyedYarnPurchase;
import com.webapp.service.UndyedYarnPurchaseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Secured("ROLE_USER")
public class FormController {

	@Autowired
	UndyedYarnPurchaseService undyedYarnPurchaseService;
	
	static final Logger logger = Logger.getLogger(FormController.class); 

	@RequestMapping(value = {"/saveUYPForm"}, method = RequestMethod.POST)
	public UndyedYarnPurchase saveUYPForm(@RequestBody UndyedYarnPurchase undyedYarnPurchase) {
		logger.info("saveUYPForm");
		return undyedYarnPurchaseService.saveUYP(undyedYarnPurchase);
	}
	
	@RequestMapping(value = {"/findAllUYP"}, method = RequestMethod.GET)
	public List<UndyedYarnPurchase> findAllUYP() {
		logger.info("findAllUYP");
		return undyedYarnPurchaseService.findAllUYP();
	}
	
	@RequestMapping(value = {"/findByUYPId"}, method = RequestMethod.POST)
	public UndyedYarnPurchase findByUYPId(@RequestBody Long uypId) {
		logger.info("findByUYPId");
		return undyedYarnPurchaseService.findByUYPId(uypId);
	}
	
	@RequestMapping(value = {"/deleteUYP"}, method = RequestMethod.POST)
	public void deleteUYP(@RequestBody List<Long> uypId) {
		logger.info("deleteUYP");
		undyedYarnPurchaseService.deleteUYP(uypId);
}
}