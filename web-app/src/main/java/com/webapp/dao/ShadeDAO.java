package com.webapp.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.webapp.model.Shade;

public interface ShadeDAO extends CrudRepository<Shade, Long>{

	public List<Shade> findByShadeNoLike(String shadeNo);
}
