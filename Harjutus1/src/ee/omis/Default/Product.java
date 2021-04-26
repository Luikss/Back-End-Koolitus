package ee.omis.Default;

public class Product {

    private static String name;
    private static double price;
    private int itemId;

    public Product(String name, double price, int itemId) {
        this.name = name;
        this.price = price;
        this.itemId = itemId;
    }

    public static String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }
}