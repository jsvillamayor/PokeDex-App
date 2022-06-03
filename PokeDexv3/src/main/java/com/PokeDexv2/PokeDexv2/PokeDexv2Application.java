package com.PokeDexv2.PokeDexv2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@SpringBootApplication
public class  PokeDexv2Application {

	public static void main(String[] args) {
		SpringApplication.run(PokeDexv2Application.class, args);
	}
  @Bean
  public CorsFilter corsFilter() {
    CorsConfiguration corsCorfiguration = new CorsConfiguration();
    corsCorfiguration.setAllowCredentials(true);
    corsCorfiguration.setAllowedOrigins(Arrays.asList("http://http://localhost:4200/"));
    corsCorfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type"
      , "Access-Control-Request-Method", "Access-Control-Request-Headers"));
    corsCorfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
      "Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
    corsCorfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
    urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsCorfiguration);
    return new CorsFilter(urlBasedCorsConfigurationSource);

  }

}
