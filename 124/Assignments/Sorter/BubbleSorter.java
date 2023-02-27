public class BubbleSorter extends Sorter {
   public BubbleSorter(int[] od) {
      super(od);
   }
   
   public void sort() {
      //TODO: Implement bubble sort.
      int dataSize = data.length;
      int i = 0;
      boolean swapped;
      do {
         swapped = false;
         for (int j = 0; j < dataSize -i-1; j++) {
            if (data[j] > data[j + 1]) {
               int temp = data[j];
               data[j] = data[j+1];
               data[j+1] = temp;
               swapped = true;
               numSwaps++;
            }
            innerLoopExecutions++;
         }
         outerLoopExecutions++;
         i++;
      } while (i < dataSize && swapped);
   }
}