package ee.omis.Admin;

import ee.omis.Client.Client;

public class SuperAdmin extends Admin implements ManageClients {

    public SuperAdmin(String name, String email, int phone, int id) {
        super(name, email, phone, id);
    }

    @Override
    public void removeClient() {

    }
}