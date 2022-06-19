package com.group1.Pokedex.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Data;

@Document("pokemon")
@Data
public class Pokemon {

	@Id
	private String id;
	@Field
	private int pokedexNumber;
	@Field
	@Indexed
	private String name;
	@Field
	private int hp;
	@Field
	private int attack;
	@Field
	private int defend;
	@Field
	private String imageUrl;
	
	public Pokemon(String id, int pokedexNumber, String name, int hp, int attack, int defend, String imageUrl) {
		this.id = id;
		this.pokedexNumber = pokedexNumber;
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defend = defend;
		this.imageUrl = imageUrl;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getPokedexNumber() {
		return pokedexNumber;
	}

	public void setPokedexNumber(int pokedexNumber) {
		this.pokedexNumber = pokedexNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getAttack() {
		return attack;
	}

	public void setAttack(int attack) {
		this.attack = attack;
	}

	public int getDefend() {
		return defend;
	}

	public void setDefend(int defend) {
		this.defend = defend;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
}
