package ninesquares;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class MyJPanel extends JPanel {
    private final Color myColor;
    
    public MyJPanel(Color myColor) {
        this.myColor = myColor;
        setBackground(myColor);
        addMouseListener(new MouseWatcher());
    }
    
    public void setSelectedColor() {
        setBackground(Color.magenta);
    }
    
    public void setOriginalColor() {
        setBackground(myColor);
    }
    
    class MouseWatcher extends MouseAdapter {
        @Override
        public void mouseEntered(MouseEvent me) {
            setSelectedColor();
        }
        @Override
        public void mouseExited(MouseEvent me) {
            setOriginalColor();
        }
    }

}