public class InsertionSorter extends Sorter {
	
	// Constructor just uses superclass constructor.
	public InsertionSorter(int[] od) {
		super(od);
	}

   // Method to sort the array, using Insertion Sort.
	public void sort() {
      // TO-DO: implement the insertion sort algorithm to
      //        sort the data array.
      int dataSize = data.length;
      for (int i = 1; i < dataSize; ++i) {
         int j = i;
         // Insert numbers[i] into sorted part
         // stopping once numbers[i] in correct position
         while (j > 0 && data[j] < data[j - 1]) {
            // Swap numbers[j] and numbers[j - 1]
            int temp = data[j];
            data[j] = data[j - 1];
            data[j - 1] = temp;
            numSwaps++;
            --j;
            innerLoopExecutions++;
         }
         outerLoopExecutions++;
      }
	}
}
