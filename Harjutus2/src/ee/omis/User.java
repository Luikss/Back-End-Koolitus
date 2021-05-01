package ee.omis;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class User {

    private final List<String> list;
    private boolean found = false;

    public User() {
        list = new ArrayList<>();
    }

    public void tryAddToList(String sample) {
        list.stream()
                .filter(e -> list.contains(sample.toUpperCase()))
                .findFirst()
                .ifPresent(e -> found = true);
        if (found) {
            System.out.println(sample + " on juba listis olemas");
            found = false;
        } else if (sample.length() > 1 && sample.startsWith("a")) {
            list.add("EU_" + sample.toUpperCase());
        } else if (sample.length() > 1) {
            list.add("OTHER_" + sample.toUpperCase());
        }
    }

    public void searchInList(String sample) {
        Stream<String> s = list.stream()
                .filter(name -> name.startsWith(sample.toUpperCase()))
                .limit(3);
        System.out.println(s.collect(Collectors.toList()));
    }
}
