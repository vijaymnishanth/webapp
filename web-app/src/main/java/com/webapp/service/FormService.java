package com.webapp.service;

import java.util.List;

import com.webapp.model.Count;
import com.webapp.model.Shade;
import com.webapp.model.YarnType;

public interface FormService {
public List<Shade> searchByShadeNo(String shadeNo);

public List<Count> findAllCount();

public List<YarnType> findAllYarnType();
}
