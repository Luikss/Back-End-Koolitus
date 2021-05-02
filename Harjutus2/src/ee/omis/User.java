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

    public List<String> getList() {
        return list;
    }

    public void tryAddToList(String input) {
        String sample = input;

        if (input.equals("1") || input.equals("2") || input.equals("3")) {
            numberInput(input);
        } else if (sample.length() > 1 && !sample.startsWith("a")) {
            sample = "OTHER_" + sample.toUpperCase();
        } else if (sample.length() > 1 && sample.startsWith("a"))
            sample = "EU_" + sample.toUpperCase();

        String finalSample = sample;
        list.stream()
                .filter(e -> list.contains(finalSample))
                .findFirst()
                .ifPresent(e -> found = true);

        if (found) {
            System.out.println(input + " on juba listis olemas");
        }

        if (!found && sample.length() > 1) {
            list.add(sample);
        }
        found = false;
    }

    public void searchInList(String sample) {
        if (sample.equals("a") || sample.equals("A")) {
            Stream<String> a = list.stream()
                    .filter(name -> name.startsWith("E"))
                    .limit(3);
            System.out.println(a.collect(Collectors.toList()));
        } else {
            Stream<String> s = list.stream()
                    .filter(name -> name.substring(6).startsWith(sample.toUpperCase()))
                    .limit(3);
            System.out.println(s.collect(Collectors.toList()));
        }
    }

    public void numberInput(String sample) {
        simpleEnum.returnEnum(sample);
    }

    enum simpleEnum {
        A, B, C, D;

        public static void returnEnum(String sample) {
            switch (sample) {
                case "1":
                    System.out.println(A + " " + B);
                    break;
                case "2":
                    System.out.println(B + " " + C);
                    break;
                case "3":
                    System.out.println(C + " " + D);
                    break;
                default:
                    System.out.println("Seda kirja ei tohiks kunagi tulla");
            }
        }
    }
}
