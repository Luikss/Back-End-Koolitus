package ee.omis.Default;

import ee.omis.Admin.Administrator;
import ee.omis.Admin.ClientSupport;
import ee.omis.Admin.SalesPerson;
import ee.omis.Admin.SuperAdmin;
import ee.omis.Client.BusinessClient;
import ee.omis.Client.RegularClient;

public class Main {

    public static void main(String[] args) {

        Administrator administrator = new Administrator("Joel Mägi", "joelmägi@gmail.com", 52352352, 1);
        SuperAdmin superAdmin = new SuperAdmin("Toivo Kuld", "toivokuld@gmail.com", 5242626, 2);
        SalesPerson salesPerson = new SalesPerson("Meelis Raha", "meelisraha@gmail.com", 5464362, 3);
        ClientSupport clientSupport = new ClientSupport("Tanel Suva", "tanelsuva@gmail.com", 53524623, 4);
        BusinessClient businessClient = new BusinessClient("Richard Rikas", "richardrikas@gmail.com", 52577832, 1);
        RegularClient regularClient = new RegularClient("Siim Tõrvik", "siimtõrvik@gmail.com", 587223425, 2);
        Product arvuti = new Product("MSI arvuti", 1000, 1);

        System.out.println("Numbri muutus adminil: ");
        System.out.println("Vana number: " + administrator.getPhone());
        administrator.setPhone(59252355);
        System.out.println("Uus number: " + administrator.getPhone());
        System.out.println("-----------------------------");

        System.out.println("Äriklient tahab osta 5 arvutit, ning hinnapakkumiseks pöördub salespersoni poole: ");
        System.out.println("Vana soodustus: " + businessClient.getDiscount());
        salesPerson.messageClient("Teie uus soodustus antud ostu pealt on 10%");
        businessClient.setDiscount(0.9);
        System.out.println("Uus soodustus: " + businessClient.getDiscount());
        System.out.println("Vana kontojääk: " + businessClient.getBalance());
        businessClient.addFunds(5000);
        System.out.println("Uus kontojääk: " + businessClient.getBalance());
        businessClient.buyProduct("MSI arvuti");
        businessClient.buyProduct("MSI arvuti");
        businessClient.buyProduct("MSI arvuti");
        businessClient.buyProduct("MSI arvuti");
        businessClient.buyProduct("MSI arvuti");
        System.out.println("Kontojääk peale ostu: " + businessClient.getBalance());
        businessClient.setDiscount(0.93);
        System.out.println("Uus soodustus: " + businessClient.getDiscount());
        System.out.println("-----------------------------");

        System.out.println("Tavaklient ostab uue arvuti, aga unustab raha kontole panna: ");
        regularClient.buyProduct("MSI arvuti");
        System.out.println("Klient on vanem inimene ja ei saa aru, miks ta arvutit osta ei saa. Ta pöördub clientsupporti poole.");
        clientSupport.messageClient("Teie kontol ei ole piisavalt raha, palun laadige juurde");
        regularClient.addFunds(1000);
        regularClient.buyProduct("MSI arvuti");
        System.out.println("Kontojääk peale ostu: " + regularClient.getBalance());
        System.out.println("-----------------------------");
    }
}