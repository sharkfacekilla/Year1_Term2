import java.util.ArrayList;

public class ShoppingCart {
   
   private String custName;
   private String curDate;
   private ArrayList<ItemToPurchase> cartItems = new ArrayList<ItemToPurchase>();
   
   public ShoppingCart() {
      custName = "none";
      curDate = "January 1, 2022";
   }
   
   public ShoppingCart(String customerName, String currentDate) {
      custName = customerName;
      curDate = currentDate;
   }
   
   public String getCustomerName() {
      return custName;
   }
   
   public String getDate() {
      return curDate;
   }
   
   public void addItem(ItemToPurchase item) {
      cartItems.add(item);
   }
   
   public void removeItem(String itemName) {
      boolean found = false;
      int i = 0;
      while (i < cartItems.size() && (!found)) {
         if (cartItems.get(i).getName().equals(itemName)) {
            cartItems.remove(i);
            found = true;
         }
         else {
            i++;
         }
      }
      if (!found) {
         System.out.println("Item not found in cart. Nothing removed.");
      }
   }

   public void modifyItem(ItemToPurchase item, String name, int quantity) {
      boolean changed = false;
      int i = 0;
      while (i < cartItems.size() && (!changed)) {
         if (cartItems.get(i).getName().equals(name)) {
            item.setQuantity(quantity);
            ItemToPurchase newItem = new ItemToPurchase(name, cartItems.get(i).getDescription(), cartItems.get(i).getPrice(),
            quantity);
            cartItems.set(i, newItem);
            changed = true;
         }
         else {
            i++;
         }
      }
      if(!changed) {
         System.out.println("Item not found in cart. Nothing modified.");
      }
   }
   
   public int getNumItemsInCart() {
      int total = 0;
      for (ItemToPurchase item: cartItems) {
         total += item.getQuantity();
      }
      return total;
   }
   
   public int getCostOfCart() {
      int total = 0;
      for (ItemToPurchase item: cartItems) {
         total += item.getPrice() * item.getQuantity();
      }
      return total;
   }
   
   public void printTotal() {
      System.out.println("OUTPUT SHOPPING CART");
      System.out.println(getCustomerName() + "'s Shopping Cart - " + getDate());
      System.out.println("Number of Items: " + getNumItemsInCart() + "\n");
      if (getNumItemsInCart() == 0) {
         System.out.println("SHOPPING CART IS EMPTY");
         System.out.println("\nTotal: $0");
      }
      else {
         for (int i = 0; i < cartItems.size(); i++) {
            System.out.println(cartItems.get(i).printItemCost());
         }
         int grandTotal = getCostOfCart();
         System.out.println("\nTotal: $" + grandTotal);
      }
   }
   
   public void printDescriptions() {
      System.out.println("OUTPUT ITEMS\' DESCRIPTIONS");
      System.out.println(getCustomerName() + "'s Shopping Cart - " + getDate());
      System.out.println("\nItem Descriptions");
      for (int i = 0; i < cartItems.size(); i++) {
         System.out.println(cartItems.get(i).getName() + ": " + cartItems.get(i).getDescription());
      }
   }
}