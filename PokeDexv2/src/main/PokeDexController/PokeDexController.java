
@RestController
public class PokeDexController {


    @GetMapping("/")
    public String getPage() {
        return "Welcome";
    }

    @GetMapping(value="/users")
    public  getUsers(){
        return "Welcome";
    }

    
}
