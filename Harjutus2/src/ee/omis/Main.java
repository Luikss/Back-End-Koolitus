package ee.omis;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        User user = new User();
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        while (!input.equals("stop")) {

            //Sisestades 1 täht, näidatakse talle selle tähega algavad elemendid
            if (input.length() == 1) {
                user.searchInList(input);
            }

            user.tryAddToList(input);
            input = scanner.nextLine();
        }
    }
}