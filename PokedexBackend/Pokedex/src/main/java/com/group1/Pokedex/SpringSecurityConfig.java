package com.group1.Pokedex;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{

	protected void configure(HttpSecurity http) throws Exception{
		http.csrf().
		disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**")
			.permitAll()
			.anyRequest()
			.authenticated()
			.and()
			.httpBasic();
	}
	
}
