package com.webapp.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.model.Count;
import com.webapp.model.DyeingOrder;
import com.webapp.model.DyeingOrderReceived;
import com.webapp.model.DyeingOrderSummary;
import com.webapp.model.Shade;
import com.webapp.model.UndyedYarnDyeing;
import com.webapp.model.UndyedYarnPurchase;
import com.webapp.model.YarnType;
import com.webapp.service.DyeingOrderReceivedService;
import com.webapp.service.DyeingOrderService;
import com.webapp.service.FormService;
import com.webapp.service.UndyedYarnDyeingService;
import com.webapp.service.UndyedYarnPurchaseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Secured("ROLE_USER")
public class FormController {

	@Autowired
	UndyedYarnPurchaseService undyedYarnPurchaseService;
	
	@Autowired
	DyeingOrderService dyeingOrderService;
	
	@Autowired
	FormService formService;
	
	@Autowired
	DyeingOrderReceivedService dyeingOrderReceivedService;
	
	@Autowired
	UndyedYarnDyeingService undyedYarnDyeingService;
	
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
	// Dyeing Order
	
	@RequestMapping(value = {"/saveDyeingOrderForm"}, method = RequestMethod.POST)
	public DyeingOrder saveDyeingOrderForm(@RequestBody DyeingOrder dyeingOrder) {
		logger.info("saveDyeingOrderForm");
		return dyeingOrderService.saveDyeingOrder(dyeingOrder);
	}
	
	@RequestMapping(value = {"/findAllDyeingOrder"}, method = RequestMethod.GET)
	public List<DyeingOrder> findAllDyeingOrder() {
		logger.info("findAllDyeingOrder");
		return dyeingOrderService.findAllDyeingOrder();
	}
	
	@RequestMapping(value = {"/findAllDyeingOrderSummary"}, method = RequestMethod.GET)
	public List<DyeingOrderSummary> findAllDyeingOrderSummary() {
		logger.info("findAllDyeingOrderSummary");
		return dyeingOrderService.findAllDyeingOrderSummary();
	}
	
	@RequestMapping(value = {"/searchByShadeNo"}, method = RequestMethod.POST)
	public List<Shade> searchByShadeNo(@RequestBody String shadeNo) {
		logger.info("searchByShadeNo");
		return formService.searchByShadeNo(shadeNo);
	}
	
	@RequestMapping(value = {"/findAllCount"}, method = RequestMethod.GET)
	public List<Count> findAllCount() {
		logger.info("findAllCount");
		return formService.findAllCount();
	}
	
	@RequestMapping(value = {"/findAllYarnType"}, method = RequestMethod.GET)
	public List<YarnType> findAllYarnType() {
		logger.info("findAllYarnType");
		return formService.findAllYarnType();
	}
	
	@RequestMapping(value = {"/findDORByDOId"}, method = RequestMethod.POST)
	public List<DyeingOrderReceived> findDORByDOId(@RequestBody Long dyeingOrderId) {
		logger.info("findDORByDOId");
		return dyeingOrderReceivedService.findDORByDOId(dyeingOrderId);
	}
	
	@RequestMapping(value = {"/saveDORForm"}, method = RequestMethod.POST)
	public DyeingOrderReceived saveDORForm(@RequestBody DyeingOrderReceived dyeingOrderReceived) {
		logger.info("saveDORForm");
		return dyeingOrderReceivedService.saveDOR(dyeingOrderReceived);
	}
	
	@RequestMapping(value = {"/findSumOfDOR"}, method = RequestMethod.POST)
	public Long findSumOfDOR(@RequestBody Long dyeingOrderId) {
		logger.info("findSumOfDOR");
		return dyeingOrderReceivedService.sumOfDyeingOrderReceived(dyeingOrderId);
	}
	
	@RequestMapping(value = {"/deleteDOR"}, method = RequestMethod.POST)
	public void deleteDOR(@RequestBody List<Long> dorId) {
		logger.info("deleteDOR");
		dyeingOrderReceivedService.deleteDOR(dorId);
	}
	
	@RequestMapping(value = {"/deleteDyeingOrder"}, method = RequestMethod.POST)
	public void deleteDyeingOrder(@RequestBody List<Long> dyeingOrderId) {
		logger.info("deleteDyeingOrder");
		dyeingOrderService.deleteDyeingOrder(dyeingOrderId);
	}
	
	@RequestMapping(value = {"/countOfDOR"}, method = RequestMethod.POST)
	public Long countOfDOR(@RequestBody List<Long> dyeingOrderId) {
		logger.info("countOfDOR");
		return dyeingOrderReceivedService.countOfDOR(dyeingOrderId);
	}
	
	@RequestMapping(value = {"/saveUYDForm"}, method = RequestMethod.POST)
	public UndyedYarnDyeing saveUYDForm(@RequestBody UndyedYarnDyeing undyedYarnDyeing) {
		logger.info("saveUYPForm");
		return undyedYarnDyeingService.saveUYP(undyedYarnDyeing);
	}
	
	@RequestMapping(value = {"/findAllUYD"}, method = RequestMethod.GET)
	public List<UndyedYarnDyeing> findAllUYD() {
		logger.info("findAllUYP");
		return undyedYarnDyeingService.findAllUYD();
	}
}