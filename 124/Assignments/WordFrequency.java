import java.util.Scanner;

public class WordFrequency {

    public static int getFrequencyOfWord(String[] wordsList, int listSize, String currWord) {
        int counter = 0;
        for (int i = 0; i < listSize; i++) {
            if (wordsList[i].equals(currWord)) {
                counter++;
            }

        }
        return counter;
    }
    public static void main(String[] args) {

        /*write a program that reads a list of words, then the program outputs those words and their frequencies. The input begins with an integer indicating the number of words that follow. Assume that the list will always contain fewer than 20 words. Hint: Use two arrays, one for the strings, another for the frequencies. Your program must define and call a method: public static int getFrequencyOfWord(String[] wordsList, int listSize,
        String currWord)

        Ex: if the input is:
        5 hey hi Mark hi mark

        the output is:
        hey 1
        hi 2
        Mark 1
        hi 2
        mark 1

         */
        Scanner scnr = new Scanner(System.in);
        int numUserWords = scnr.nextInt();
        String[] userWordString = new String[numUserWords];
        
        for (int i = 0; i < numUserWords; i++) {
            userWordString[i] = scnr.next();
        }

        for (int i = 0; i < numUserWords; i++) {
            System.out.println(userWordString[i] + " " + getFrequencyOfWord(userWordString, numUserWords, userWordString[i]));
        }

    }
}