package ee.omis.Client;

import ee.omis.Default.Product;

public class BusinessClient extends Client {

    private static double balance;
    private static double discount;

    public BusinessClient(String name, String email, int phone, int id) {
        super(name, email, phone, id);
        balance = 0;
        discount = 0.93; //ärikliendi allahindlus 7%
    }

    public static double getBalance() {
        return balance;
    }

    public static void setBalance(double balance) {
        BusinessClient.balance = balance;
    }

    public double getDiscount() {
        return discount;
    }

    public static void setDiscount(double discount) {
        BusinessClient.discount = discount;
    }

    public void addFunds(double sum) {
        setBalance(getBalance() + sum);
    }

    public void buyProduct(String product) {
        if (balance - Product.getPrice() >= 0) {
            if (product == Product.getName()) {
                setBalance(getBalance() - (Product.getPrice() * discount));
            } else {
                System.out.println("Product not found");
            }
        } else {
            System.out.println("Not enough funds on account");
        }
    }
}