package com.webapp.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.webapp.exception.UserException;
import com.webapp.model.Token;
import com.webapp.model.User;
import com.webapp.service.TokenService;
import com.webapp.service.UserService;



@Component
@CrossOrigin(origins = "http://localhost:4200")
public class SecurityInterceptor extends HandlerInterceptorAdapter {

	static final Logger logger = Logger.getLogger(SecurityInterceptor.class);
	
	@Autowired	
	TokenService tokenService;
	@Autowired
	UserService userService;
	
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		logger.info("Interceptor...");
		logger.info("REQUEST Intercepted for URI: "
				+ request.getRequestURI());
		 boolean isSecure = true;
		String authToken = extractAuthTokenFromRequest(request);
		logger.info("AuthToken: " + authToken);
		if(authToken!=null) {
	        String[] parts = authToken.split(":");
	        if (parts.length == 2) {
	            String tokenKey = parts[0];
	            String tokenSecret = parts[1];
	            if (validateTokenKey(tokenKey)) {
	                Token token = tokenService.getTokenByKey(tokenKey);
	               // List<String> allowedIPs = new Gson().fromJson(token.getAllowedIP(), new TypeToken<ArrayList<String>>() {}.getType());
	                    if (token != null) {
	                        if (token.getToken().equals(tokenSecret) && token.getExpired().getTime() > System.currentTimeMillis()) {
	                            User userDetails = userService.findByUserId(token.getUserId());
	                            request.setAttribute("userId", token.getUserId());
	                            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	                            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
	                            SecurityContextHolder.getContext().setAuthentication(authentication);
	                            logger.info("Authenticated " + token.getTokenKey());
	                            if (!request.getRequestURI().equalsIgnoreCase("/web-app/api/logout")) {
	                            updateLastLogin(token);
	                            }
	                            isSecure = true;
	                        }
	                        else {
	                        	tokenService.deleteToken(token.getTokenId());
	                            logger.info("Unable to authenticate the token: " + authToken + ". Incorrect secret or token is expired");	                            
	                        }
	                    }
	                }
	            else {
	                logger.info("Unable to authenticate the token: " + authToken + ". Key is broken");
	            }
	        }
		}
		if(!isSecure) {
			throw new UserException("Session Expired");
		}
		return isSecure;
	}

private void updateLastLogin(final Token token) {
    Thread updateTokenThread;
    updateTokenThread = new Thread(new Runnable() {
        public void run() {
            tokenService.updateLastLoginByCurrentDate(token);
        }
    });
    updateTokenThread.setName("RESTTokenThread-" + (int)Math.floor(Math.random()*10000));
    updateTokenThread.start();

}

private boolean validateTokenKey(String tokenKey){
    String[] parts = tokenKey.split("-");
    return parts.length == 5;
}
    private String extractAuthTokenFromRequest(HttpServletRequest httpRequest) {
        /* Get token from header */
        String authToken = httpRequest.getHeader("X-Auth-Token");
        HttpSession session;
 
                /* If token not found get it from request parameter */
        if (authToken == null) {
            authToken = httpRequest.getParameter("token");
        }
        if (authToken == null) {
            session = httpRequest.getSession();
            authToken = (String) session.getAttribute("token");
        }
 
        return authToken;
    }
}
