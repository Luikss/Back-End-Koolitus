package ee.omis.Admin;

import ee.omis.Client.Client;

public class Administrator extends Admin implements ManageClients {

    public Administrator(String name, String email, int phone, int id) {
        super(name, email, phone, id);
    }

    public void removeClient() {

    }
}