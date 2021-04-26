package ee.omis.Admin;

public interface Balance {

    void addBalanceRegular(double sum);
    void addBalanceBusiness(double sum);
    void giveDiscountRegular(double sum);
    void giveDiscountBusiness(double sum);
    void messageClient(String message);
}