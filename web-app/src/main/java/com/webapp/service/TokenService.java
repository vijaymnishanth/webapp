package com.webapp.service;

import java.util.List;

import com.webapp.model.Token;
import com.webapp.model.User;

public interface TokenService {

public Token getTokenByKey(String tokenKey);

public List<Token> getTokens();

public void saveToken(Token token);

public Token generateToken(User user);

public void updateLastLoginByCurrentDate(Token token);

public void deleteToken(Long tokenId);

public Token getTokenById(Long tokenId);

public void deleteByUserId(Long userId);

}
