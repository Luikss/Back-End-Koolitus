package ee.omis.character;

import ee.omis.item.Item;

public class Enemy extends Character {

    private static int health;
    private EnemyType enemyType;

    public Enemy(String name) {
        super(name, 'Z', false);
        reboost();
        enemyType = EnemyType.getRandomEnemyType();
    }

    public static int getHealth() {
        return health;
    }

    public static void decreaseHealth(int healthTaken) {
        health -= healthTaken;
    }

    public static void killed() {
        health = 0;
    }

    public static void loseHealth(Item item) {
        health =(int) (health - item.getStrength());
    }

    public static void reboost() {
        health = (int) (Math.random() * (10));
    }
}