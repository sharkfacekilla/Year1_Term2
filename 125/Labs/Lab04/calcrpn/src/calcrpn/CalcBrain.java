package calcrpn;

import java.util.Stack;

public class CalcBrain implements CalcRPNOperations { 
    Stack<Float> results;
    String operand;
    
    public CalcBrain(){
        results = new Stack<Float>();
        operand = "";
    }
    
    @Override
    public String digit(String digit) {
        operand += digit;
        return digit;
        
    }

    @Override
    public String operator(String op) {
        float a;
        float b;
        float c = 0;
        if (!operand.isEmpty() && results.size() > 0) {
            float result = Float.parseFloat(operand);
            results.push(result);
            operand = "";
        }        

        if (results.size() < 2) {
            return "";
        }
        
        else if (results.size() > 1) {
            a = results.pop(); 
            b = results.pop();
            switch (op) {
                case "+":
                    c = b + a;
                    break;
                case "-":
                    if (a < 0) {
                        c = b + a;
                    }
                    else {
                    c = b - a;
                    }
                    break;
                case "*":
                    c = b * a;
                    break;
                case "/":
                    c = b / a;
                    break;
                case "^":
                    c = (float)Math.pow(b, a);
                    break;
                default:
                    return "";
                    
            }
        }
        results.push(c);
        String result = Float.toString(c);
        return op + "\n" + result + " " ;
    } 


    @Override
    public String clearEntry() {
        if (!results.isEmpty() && (operand.isEmpty())) {
            results.pop();
        }
        String cleared = "\nCleared Digits\n";
        operand = "";
        return cleared;
    }

    @Override
    public String clear() {
        results.clear();
        String cleared = "\nClear All\n";
        return cleared;
    }

    @Override
    public String enterPressed() {
        if (operand.equals(".")) {
            return "";
        }
        if (operand.equals("")) {
            return "";
        }
        else {
            float result = Float.parseFloat(operand);
            results.push(result);
            operand = "";
            System.out.println(results);
            return " ";
        }
    }

    @Override
    public String addDecimal() {
        if (!operand.contains(".")) {
            operand = operand.concat(".");
            return ".";
        }
        else {
            return "";
        }
    }
}