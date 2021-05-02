package ee.omis;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        User user = new User();
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        while (!input.equals("stop")) {

            //Sisestades input > 2, lisatakse input listi.
            //Sisestades 1 täht, näidatakse kasutajale selle tähega algavad elemendid listis.
            //Sisestades number 1-3, kuvatakse talle enumi väärtused.
            //Sisestades stop, lõpetatakse programm ja kuvatakse kogu list (kontrolliks).

            if (input.length() == 1) {
                user.searchInList(input);
            }
            user.tryAddToList(input);
            input = scanner.nextLine();
        }
        System.out.println(user.getList());
    }
}