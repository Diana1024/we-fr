package fratcher;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class FratcherController {
    @RequestMapping("/greeting")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
