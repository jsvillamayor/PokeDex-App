package com.group1.Pokedex;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private DataSource dataSource;
	
	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
            .dataSource(dataSource)
            .usersByUsernameQuery("select username, password, 'true' as enabled from user where username=?")
            .authoritiesByUsernameQuery("select username, role from user where username=?")
        ;
    }
	
	@Override
    protected void configure(HttpSecurity http) throws Exception{
        http.cors().and().csrf().
        disable()
        .authorizeRequests()
        .antMatchers("/add**").authenticated()
        .and()
        .httpBasic();
    }
	
	public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/get**");
	}

}
