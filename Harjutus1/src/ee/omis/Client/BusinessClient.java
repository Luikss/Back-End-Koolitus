package ee.omis.Client;

public class BusinessClient extends Client {

    public BusinessClient(String name, String email, int phone, int id) {
        super(name, email, phone, id);
        setDiscount(0.93); // 7% allahindlus
    }
}