package ee.omis.Client;

import ee.omis.User;

public class Client extends User {

    private static int clientId;
    private static double balance;
    private static double discount;

    public Client(String name, String email, int phone, int id) {
        super(name, email, phone);
        this.clientId = id;
        this.balance = 0;
        this.discount = 0.98; // 2% allahindlust
    }

    public static int getClientId() {
        return clientId;
    }

    public static double getBalance() {
        return balance;
    }

    public static void setBalance(double balance) {
        Client.balance = balance;
    }

    public static double getDiscount() {
        return discount;
    }

    public static void setDiscount(double discount) {
        Client.discount = discount;
    }
}