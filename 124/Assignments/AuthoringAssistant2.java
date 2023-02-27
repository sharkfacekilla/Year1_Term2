import java.util.Scanner;

public class AuthoringAssistant2 {
   public static String shortenSpace(String userInput) {
      String results = userInput.trim();
      results = results.replaceAll(" +", " ");
      
      return results;
   }
   
   public static String replaceExclamation(String userString) {
      String result = userString.replace("!", ".");
      
      return result;
   }
   
   public static int getNumOfWords(String userString) {
      int numOfWords = 0;
      String[] words = userString.split("\\s+");
      numOfWords = words.length;
      
      return numOfWords;
   }
   
   public static int getNumOfNonWSCharacters(String userInput) {
      int stringLength = userInput.length();
      int numOfChars = userInput.replace(" ", "").length();
      
      return numOfChars;
   }
   
   public static int findText(String wordToFind, String userString) {
      int numOfWordsFound = 0;
      if (userString.contains(wordToFind)) {
        numOfWordsFound = userString.split(wordToFind, -1).length - 1;
      }
            
      return numOfWordsFound;
   }
   
   public static void printMenu() {
      System.out.println("MENU");
      System.out.printf("c - Number of non-whitespace characters%nw - Number of words%nf - Find text%n");
      System.out.printf("r - Replace all !'s%ns - Shorten spaces%nq - Quit%n%n");
      System.out.println("Choose an option:");
   }
   
   public static void main(String[] args) {
      /* Type your code here. */
      Scanner scnr = new Scanner(System.in);
      
      System.out.printf("Enter a sample text:%n%n");
      String userString = scnr.nextLine();
      String menuOption;
      System.out.printf("You entered: " + userString + "%n%n");
      
      
      do {
         printMenu();
         menuOption = scnr.nextLine();
         while (!menuOption.equals("c") && !menuOption.equals("w") && !menuOption.equals("f") && !menuOption.equals("r") && !menuOption.equals("s") && !menuOption.equals("q")) {
            System.out.println("Invalid input. Please enter a valid menu option.");
            menuOption = scnr.nextLine();
         }
            
         switch (menuOption) {
            case "c":
               int result = getNumOfNonWSCharacters(userString);
               System.out.printf("%nNumber of non-whitespace characters: %d%n%n",result);
               break;
            case "w":
               int wordCount = getNumOfWords(userString);
               System.out.printf("%nNumber of words: %d%n%n",wordCount);
               break;
            case "f":
               System.out.println("Enter a word or phrase to be found:");
               String wordToFind = scnr.nextLine();
               int numOfWordsFound = findText(wordToFind, userString);
               System.out.printf("\"%s\" instances: %d%n%n",wordToFind, numOfWordsFound);
               break;
            case "r":
               userString = replaceExclamation(userString);
               System.out.printf("%nEdited text: %s%n%n",userString);
               break;
            case "s":
               userString = shortenSpace(userString);
               System.out.printf("%nEdited text: %s%n%n",userString);
               break;
            case "q":
               break;
         }
      } while (!menuOption.equals("q"));
   }
}