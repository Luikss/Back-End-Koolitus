package ee.omis.Admin;

import ee.omis.Client.BusinessClient;
import ee.omis.Client.RegularClient;

public class ClientSupport extends Admin implements Balance {

    public ClientSupport(String name, String email, int phone, int id) {
        super(name, email, phone, id);
    }

    @Override
    public void addBalanceRegular(double sum) {
        RegularClient.setBalance(RegularClient.getBalance() + sum);
    }

    @Override
    public void addBalanceBusiness(double sum) {
        BusinessClient.setBalance(BusinessClient.getBalance() + sum);
    }

    @Override
    public void giveDiscountRegular(double sum) {
        RegularClient.setDiscount(RegularClient.getDiscount() - sum);
    }

    @Override
    public void giveDiscountBusiness(double sum) {
        BusinessClient.setDiscount(BusinessClient.getBalance() - sum);
    }

    @Override
    public void messageClient(String message) {
        System.out.println("ClientSupport: " + message);
    }
}