package com.webapp.serviceImpl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.webapp.dao.TokenDao;
import com.webapp.model.Token;
import com.webapp.model.User;
import com.webapp.service.TokenService;

@Service("TokenService")
public class TokenServiceImpl implements TokenService {

	@Autowired
	TokenDao tokenDao;

	@Override
	@Transactional
	public Token getTokenByKey(String tokenKey) {
		return tokenDao.findByTokenKey(tokenKey);
	}

	@Override
	public List<Token> getTokens() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveToken(Token token) {
		tokenDao.save(token);
	}

	@Override
	public Token generateToken(User user) {
		Token token = new Token();
		Date expiredDate = updateDate(new Date(), 15);
		token.setUserId(user.getUserId());
		token.setUserName(user.getUserName());
		token.setUserRole(user.getRole());
		token.setLastUsed(new Date());
		token.setExpired(expiredDate);
		token.setCreated(new Date());
		token.setTokenKey(UUID.randomUUID().toString().toUpperCase());
		token.setToken(passwordEncoder().encode((String.valueOf(System.nanoTime()))));
		tokenDao.save(token);
		return token;
	}

	@Override
	public void updateLastLoginByCurrentDate(Token token) {
		token.setLastUsed(new Date());
		token.setExpired(updateDate(new Date(), 15));
		tokenDao.save(token);
	}

	@Override
	public void deleteToken(Long tokenId) {
		tokenDao.deleteById(tokenId);
	}

	@Override
	public Token getTokenById(Long tokenId) {
		// TODO Auto-generated method stub
		return null;
	}

	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	public Date updateDate(Date date, int minutes) {
		Calendar calDate = Calendar.getInstance();
		calDate.setTime(date);
		calDate.add(Calendar.MINUTE, minutes);
		return calDate.getTime();
	}

	@Override
	public void deleteByUserId(Long userId) {
		tokenDao.deleteByUserId(userId);		
	}
}
