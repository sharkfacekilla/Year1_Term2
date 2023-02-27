public class BlankSetException extends RuntimeException
{
    protected static final long serialVersionUID = 42L;
    /**
     * Sets up this exception with an appropriate message.
     * @param collection the name of the collection
     */
    public BlankSetException(String set)
    {
        super("The " + set + " is empty.");
    }
}