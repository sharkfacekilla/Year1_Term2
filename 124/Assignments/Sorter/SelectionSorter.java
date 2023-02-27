public class SelectionSorter extends Sorter {

   // Constructor just uses superclass constructor.
	public SelectionSorter(int[] od) {
		super(od);
	}

   // Method to sort the array using Selection Sort.
   public void sort() {
	   // TO-DO: implement the selection sort algorithm to
	   //        sort the data array.
	   int dataSize = data.length;
      for (int i = 0; i < dataSize - 1; ++i) {
         int indexSmallest = i;
         for (int j = i + 1; j < dataSize; ++j) {
            if (data[j] < data[indexSmallest]) {
               indexSmallest = j;
            }
            innerLoopExecutions++;
         }
         // Swap numbers[i] and numbers[indexSmallest]
         int temp = data[i];
         data[i] = data[indexSmallest];
         data[indexSmallest] = temp;
         numSwaps++;
         outerLoopExecutions++;
      }
	}
}
