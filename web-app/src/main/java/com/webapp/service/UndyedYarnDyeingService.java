package com.webapp.service;

import java.util.List;

import com.webapp.model.UndyedYarnDyeing;;

public interface UndyedYarnDyeingService {

public UndyedYarnDyeing saveUYP(UndyedYarnDyeing undyedYarnDyeing);
	
public List<UndyedYarnDyeing> findAllUYD();
}
