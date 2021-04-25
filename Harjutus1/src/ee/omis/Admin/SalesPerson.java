package ee.omis.Admin;

import ee.omis.Client.Client;

public class SalesPerson extends Admin implements Balance {

    public SalesPerson(String name, String email, int phone, int id) {
        super(name, email, phone, id);
    }

    @Override
    public void addBalance(double sum) {
        double oldBalance = Client.getBalance();
        double newBalance = oldBalance + sum;
        Client.setBalance(newBalance);
    }

    @Override
    public void removeBalance(double sum) {
        double oldBalance = Client.getBalance();
        double newBalance = oldBalance - sum;
        Client.setBalance(newBalance);
    }

    @Override
    public void giveDiscount(double sum) {
        double oldDiscount = Client.getDiscount();
        double newDiscount = oldDiscount - sum;
        Client.setDiscount(newDiscount);
    }
}