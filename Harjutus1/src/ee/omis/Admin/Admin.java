package ee.omis.Admin;

import ee.omis.Default.User;

public class Admin extends User {

    private int employerId;

    public Admin(String name, String email, int phone, int id) {
        super(name, email, phone);
        this.employerId = id;
    }

    public int getEmployerId() {
        return employerId;
    }
}