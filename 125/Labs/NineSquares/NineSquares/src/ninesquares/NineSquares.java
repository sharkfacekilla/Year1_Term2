package ninesquares;

import java.awt.*;
import javax.swing.*;

public class NineSquares {
    public JFrame jFrame;
    private final MyJPanel panels[];
    private final static int NUMBER_PANELS = 9;
    public Color colors[] = {Color.blue, Color.green, Color.red, Color.white, Color.yellow, Color.black, Color.orange, Color.cyan, Color.gray};
    
    public NineSquares() {
    panels = new MyJPanel[NUMBER_PANELS];
    jFrame = new JFrame("NINE SQUARES PROGRAM");
    
    jFrame.setSize(500,500);
    jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    jFrame.getContentPane().setLayout(new GridLayout(3,3));
    
    for (int i = 0; i < NUMBER_PANELS; i++) {
        panels[i] = new MyJPanel(colors[i]);
        jFrame.getContentPane().add(panels[i]);
        }
    jFrame.setVisible(true);
    }
    public static void main(String[] args) {
        NineSquares ninesquares = new NineSquares();
    
    }
}