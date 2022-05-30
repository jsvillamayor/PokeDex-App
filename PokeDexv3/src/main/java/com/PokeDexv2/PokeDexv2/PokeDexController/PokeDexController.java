package com.PokeDexv2.PokeDexv2.PokeDexController;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
@RestController
public class PokeDexController {


  @GetMapping("/")
  public String getPage() {
    return "Welcome";
  }
}
