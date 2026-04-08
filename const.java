class OOP_4 {

    // Constructor
    OOP_4() {
        System.out.println("Special Method constructor has been Called");
    }

    void M1() {
        System.out.println("test Class m1()");
    }

    void M2() {
        System.out.println("test Class m2()");
    }

    public static void main(String[] args) {
        // create object
        OOP_4 obj = new OOP_4();

        // call methods
        obj.M1();
        obj.M2();
    }
}
