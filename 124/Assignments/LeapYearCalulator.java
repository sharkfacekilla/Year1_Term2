import java.util.Scanner; 

public class LeapYearCalculator {

   public static boolean isLeapYear(int userYear) {
      boolean leapYearTrue = false;
      if ((userYear % 4 == 0) && (userYear % 100 != 0)) {
         leapYearTrue = true;
      }
      else if (userYear % 400 == 0) {
         leapYearTrue = true;
      }
      return leapYearTrue;
   }

   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int inputYear = scnr.nextInt();
      boolean isLeap = false;
      isLeap = isLeapYear(inputYear);
      scnr.close();
      if (isLeap != true) {
         System.out.println(inputYear + " is not a leap year.");
      }
      else {
         System.out.println(inputYear + " is a leap year.");
      }
   }
}