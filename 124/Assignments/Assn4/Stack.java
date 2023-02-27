public interface Stack {
    public Object pop() throws BlankSetException;
    public Object peek() throws BlankSetException;
    public void push(Object data);
    public boolean isEmpty();
	 public int size();
}