package com.webapp.serviceImpl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webapp.dao.CountDAO;
import com.webapp.dao.ShadeDAO;
import com.webapp.dao.YarnTypeDAO;
import com.webapp.model.Count;
import com.webapp.model.Shade;
import com.webapp.model.YarnType;
import com.webapp.service.FormService;

@Service("FormService")
public class FormServiceImpl implements FormService{

	@Autowired
	ShadeDAO shadeDAO;
	
	@Autowired
	CountDAO countDAO;
	
	@Autowired
	YarnTypeDAO yarnTypeDAO;
	
	@Override
	public List<Shade> searchByShadeNo(String shadeNo) {
		
		return shadeDAO.findByShadeNoLike("%"+shadeNo+"%");
	}
	@Override
	public List<Count> findAllCount() {
		List<Count> countList = listIterator(countDAO.findAll());
		return countList;
	}

	public static List<Count> listIterator(Iterable<Count> iterable){
		List<Count> listObject = new ArrayList<Count>();
		Iterator<Count> iterator = iterable.iterator();
		while(iterator.hasNext()) {
			listObject.add(iterator.next());
		}
		
		return listObject;
	}
	@Override
	public List<YarnType> findAllYarnType() {
		List<YarnType> list = yarnTypeListIterator(yarnTypeDAO.findAll());
		return list;
	}
	
	public static List<YarnType> yarnTypeListIterator(Iterable<YarnType> iterable){
		List<YarnType> listObject = new ArrayList<YarnType>();
		Iterator<YarnType> iterator = iterable.iterator();
		while(iterator.hasNext()) {
			listObject.add(iterator.next());
		}
		
		return listObject;
	}
}
