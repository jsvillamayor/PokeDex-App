package com.PokeDexv2.PokeDexv2.PokemonDB;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;


  @Entity
  public class Pokemons {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;

    @Column
    private String Name;

    @Column
    private int HP;

    @Column
    private int Attack;

    @Column
    private int Defend;

    @Column
    private String Picture;

    public long getID() {
      return ID;
    }

    public void setID(long ID) {
      this.ID = ID;
    }

    public String getName() {
      return Name;
    }

    public void setName(String name) {
      Name = name;
    }

    public int getHP() {
      return HP;
    }

    public void setHP(int HP) {
      this.HP = HP;
    }

    public int getAttack() {
      return Attack;
    }

    public void setAttack(int attack) {
      Attack = attack;
    }

    public int getDefend() {
      return Defend;
    }

    public void setDefend(int defend) {
      Defend = defend;
    }

    public String getPicture() {
      return Picture;
    }

    public void setPicture(String picture) {
      Picture = picture;
    }


}
