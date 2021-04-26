package ee.omis.Client;

import ee.omis.Default.Product;
import ee.omis.Default.User;

public class Client extends User {

    private static int clientId;

    public Client(String name, String email, int phone, int id) {
        super(name, email, phone);
        this.clientId = id;
    }

    public static int getClientId() {
        return clientId;
    }
}