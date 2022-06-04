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


}
