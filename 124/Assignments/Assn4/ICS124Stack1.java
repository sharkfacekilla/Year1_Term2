/*
	This is an incomplete version of a stack implementation of the
	stack interface found in Stack.java.
	This implementation uses an array with the top of stack starting at
	array index position 0.
	
	Please note that we are using an array instead of the Java ArrayList
	so that we can see the implementation details that would be hidden if
	we used an ArrayList. (For example, growStack().) Because of this,
	generics are not used here either. Instead, we will use an array of
	Object types.
	
	Your task is to complete this implementation by doing the following:
	0. Add the appropriate header for the class.
	1. Add appropriate @Override annotations.
	2. Complete the two parameter constructor as indicated.
	3. Write the zero parameter constructor that invokes the two parameter constructor.
	   Use DEFAULT_STACK_SIZE to initialize both the initial array size and the growth increment.
	4. Complete setGrowthIncrement().
	5. Complete growStack().
	6. Complete size().
	   Note that it is called from push() note which method invokes growStack()
	   and when growStack() is invoked.
	
	Do not change any of the supplied code.
*/
import java.util.Arrays;

public class ICS124Stack1 implements Stack {
   
   public static final int DEFAULT_STACK_SIZE = 10;
    
   private int topOfStackIndex;	// index of the next empty spot on the stack
   private Object[] data;			// the stack
	private int growthIncrement;	// the number of elements to increase the array when it is full
	
	public ICS124Stack1() {
	   this(DEFAULT_STACK_SIZE, DEFAULT_STACK_SIZE);
	}

   public ICS124Stack1(int size, int growthIncrement) {
		/* In this constructor:
			a) Create the array that will represent the stack.
			b) Initialize the instance variable, topOfStackIndex.
			c) Invoke the setter to initialize instance variable, growthIncrement,
			with the appropriate formal parameter.
		*/
		data = new Object[size];
		int topOfStackIndex = 0;
		setGrowthIncrement(growthIncrement);
   }

	public int getGrowthIncrement() {
		return growthIncrement;
	}

	public int getTopOfStackIndex() {
	   return topOfStackIndex;
	}

	public void setGrowthIncrement(int growthIncrement) {
		/*
			The setter for growthIncrement.
			Only set the growthIncrement if it is greater than 0.
		*/
		if (growthIncrement > 0) {
		   this.growthIncrement = growthIncrement;
		  }
	}
	
   @Override
   public void push(Object element) {
      if (topOfStackIndex == data.length) growStack();
      data[topOfStackIndex] = element;
      topOfStackIndex++;
   }
   
   @Override
   public Object peek() throws BlankSetException {
      if (isEmpty()) 
         throw new BlankSetException("ICS124Stack1");
      else
         return data[topOfStackIndex-1];
   }
   
   @Override
   public Object pop() throws BlankSetException {
      Object result = peek();
      topOfStackIndex--;
      data[topOfStackIndex] = null;
      return result;
   }
   
   public boolean isEmpty() {
      return size() == 0;
   }

   public int size() {
		/*
			Returns the number of items on the stack.
		*/
		return getTopOfStackIndex();
   }
	
	public int arrayLength() {
		return data.length;
	}

   private void growStack() {
		/*
			Increase the size of the array by growthIncrement.
			Hint: Check out the Java Arrays class. You might find a useful method.		
		*/
      data = Arrays.copyOf(data, growthIncrement + arrayLength());
   }
}