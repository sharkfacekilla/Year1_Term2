package calculator125;

/**
 * @author gage
 * 
 * This is the Model component of the application.
 * The Model component responsibility is to perform all
 * the necessary calculations as required. This component
 * does not need to use the View component at all.
 **/

public class CalculatorModel {

    // Maintains the value of the sum of the numbers entered in the view.
	
    private int calculationValue;
    private int productValue;
	
    public void addTwoNumbers(int firstNumber, int secondNumber) {	
        calculationValue = firstNumber + secondNumber;
    }
	
    public int getCalculationValue() {		
        return calculationValue;		
    }	
    
    public void muiltiplyTwoNumbers(int firstNumber, int secondNumber) {
        productValue = firstNumber * secondNumber;
        
    }
    
    public int getProductValue() {
        return productValue;
    }
} // end CalculatorModel