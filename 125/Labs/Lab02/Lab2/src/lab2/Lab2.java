package lab2;

/**
 *
 * @author gage
 */
public class Lab2 {
    
    public static boolean hasASelfCount(int[] numArray) {
    /*
        purpose: return true if at least one element in the array is a self count
        e.g. [2,3,2] is true (2 only appears twice
        [5,4,2,4,3,4,4] is true (4 appears only 4 times
        [5,2,3,4,3] is false
        return true if at least one element appears exactly that number of times,
        else false
        */
        boolean hasSelfCount = false;
        for (int i = 0; i < numArray.length; i++) {
            int currentElement = numArray[i];
            int count = 0;
            for (int j = 0; j < numArray.length; j++) {
                if (numArray[j] == currentElement) {
                    count++;
                }
            }
            if (count == currentElement) {
                return true;
            }
        }
        return hasSelfCount;
    }
    
    public static int calcSumEven(int[] numArray) {
        /*
        purpose: return the sum of all even elements in an integer array
        parameter: numArray - an array containing any number of integers
        return: the sum of all even elements contained in the array
        */
        int total = 0;
        for (int i = 0; i < numArray.length; i++) {
            if (numArray[i] % 2 == 0) {
                total += numArray[i];
            }
       }
        return total;   
    }
    
    public static int calcSum(int[] numArray) {
        /* 
        purpose: return the sum of all elements in an integer array.
        parameter: numArray = array containing any number of integers
        return: the sum of all elements contained in the array;
        */
        int total = 0;
        for (int a : numArray) {
            total += a;
        }
        return total;
        // end calcSum
    }

    public static void main(String[] args) {
        int[] myNumList = {8,3,3,1,1};
        int[] numList2 = {5,4,2,4,3,4,4};
        int[] numList3 = {5,2,3,4,3};
        int[] numList4 = {8,3,2,1};
        int[] numList5 = {2,4,2,3,2};
        int[] numList6 = {7,2,1,3,2,4};
        
        System.out.println("The array is: ");
        for (int a : myNumList) {
            System.out.printf(" %3d", a);
        }
        System.out.println();
        System.out.println("The sum is: ");
        System.out.println(calcSum(myNumList));
        System.out.println("The sum of all even numbers is: ");
        System.out.println(calcSumEven(myNumList));
        
        System.out.println();
        boolean count1 = hasASelfCount(myNumList);
        boolean count2 = hasASelfCount(numList2);
        boolean count3 = hasASelfCount(numList3);
        boolean count4 = hasASelfCount(numList4);
        boolean count5 = hasASelfCount(numList5);
        boolean count6 = hasASelfCount(numList6);
        System.out.println("Results of Self Count method for test 1 is : " + count1);
        System.out.println("Results of Self Count method for test 2 is : " + count2);
        System.out.println("Results of Self Count method for test 3 is : " + count3);
        System.out.println("Results of Self Count method for test 4 is : " + count4);
        System.out.println("Results of Self Count method for test 5 is : " + count5);
        System.out.println("Results of Self Count method for test 6 is: " + count6);
    } //end main
} //end class Lab2
