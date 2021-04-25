package ee.omis.Admin;

public interface Balance {

    void addBalance(double sum);
    void removeBalance(double sum);
    void giveDiscount(double sum);
}