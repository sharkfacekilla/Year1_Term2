import java.util.Scanner;

public class ShoppingCartManager {
   public static Scanner scnr = new Scanner(System.in);
   
   public static final char QUIT = 'q';
   public static final char ADD_ITEM = 'a';
   public static final char DELETE_ITEM = 'd';
   public static final char CHANGE_QUANTITY = 'c';
   public static final char ITEM_DESCRIPTION = 'i';
   public static final char OUTPUT_CART = 'o';

   public static void changeQuantityMenu(ShoppingCart cart) {
      ItemToPurchase newItem = new ItemToPurchase();
      System.out.println("CHANGE ITEM QUANTITY");
      System.out.println("Enter the item name:");
      String itemToChange = scnr.next() + scnr.nextLine();
      System.out.println("Enter the new quantity:");
      int quantityChangeAmt = scnr.nextInt();
      cart.modifyItem(newItem, itemToChange, quantityChangeAmt);      
   }
   
   public static void deleteItemMenu(ShoppingCart cart) {
      System.out.println("REMOVE ITEM FROM CART");
      System.out.println("Enter name of item to remove:");
      String itemToRemove = scnr.next() + scnr.nextLine();
      cart.removeItem(itemToRemove);   
   }
   
   public static void addItemMenu(ShoppingCart cart) {
      ItemToPurchase newItem = new ItemToPurchase();
      System.out.println("ADD ITEM TO CART");
      scnr.nextLine();
      System.out.print("Enter the item name:\n");
      newItem.setName(scnr.nextLine());
      System.out.print("Enter the item description:\n");
      newItem.setDescription(scnr.nextLine());
      System.out.print("Enter the item price:\n");
      newItem.setPrice(scnr.nextInt());
      System.out.print("Enter the item quantity:\n");
      newItem.setQuantity(scnr.nextInt());
      cart.addItem(newItem);
   }
   
   public static char printMenu() {
      final String LEGAL_CHOICES = "" +
      QUIT + ADD_ITEM + DELETE_ITEM + CHANGE_QUANTITY + ITEM_DESCRIPTION + OUTPUT_CART;
      System.out.println("\nMENU");
      System.out.println(ADD_ITEM + " - Add item to cart\n" + DELETE_ITEM + " - Remove item from cart\n"
      + CHANGE_QUANTITY + " - Change item quantity\n" + ITEM_DESCRIPTION + " - Output items' descriptions\n" + 
      OUTPUT_CART + " - Output shopping cart\n" + QUIT + " - Quit\n");
      
      char menuOption;
      do {
         System.out.println("Choose an option:");
         menuOption = Character.toLowerCase(scnr.next().charAt(0));
      } while (!LEGAL_CHOICES.contains(""+ menuOption));
      return menuOption;
   }
   
   public static void main(String[] args) {

      System.out.println("Enter Customer's Name:");
      String customerName = scnr.nextLine();
      System.out.println("Enter Today's Date:");
      String currentDate = scnr.nextLine();
      System.out.println();
      
      System.out.println("Customer Name: " + customerName);
      System.out.println("Today's Date: " + currentDate);
      ShoppingCart cart = new ShoppingCart(customerName, currentDate);
      
      char menuChoice;
      do {
         menuChoice = printMenu();
         switch (menuChoice) {
            case ADD_ITEM:
               addItemMenu(cart);
               break;
            case DELETE_ITEM:
               deleteItemMenu(cart);
               break;
            case CHANGE_QUANTITY:
               changeQuantityMenu(cart);
               break;
            case ITEM_DESCRIPTION:
               cart.printDescriptions();
               break;
            case OUTPUT_CART:
               cart.printTotal();
               break;
            case QUIT:
               break;
         }
      } while (menuChoice != QUIT);
   }
}