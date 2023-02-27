
package calcrpn;

import java.awt.event.ActionListener;

/**
 *
 * @author slang
 * Date Created: January 24, 2019
 * Date Updated: NA* 
 */
public class CalcRPNView extends javax.swing.JFrame {
   
    /*  This source file is the View and provides the GUI components
        definition.  You do not have to modify this file.
    */    
    
    public CalcRPNView() {
        initComponents();    
        
        // Adding in the ContextMenuMouseListener to the Text Area component
        //  provides the user with the capability of performing copy and
        //  paste actions on that.
        
        jTextArea1.addMouseListener(new ContextMenuMouseListener());        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jButton1 = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        jButton7 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton5 = new javax.swing.JButton();
        jButton8 = new javax.swing.JButton();
        jButtonZero = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        jButton6 = new javax.swing.JButton();
        jButton9 = new javax.swing.JButton();
        jButtonDecimal = new javax.swing.JButton();
        jButtonClear = new javax.swing.JButton();
        jButtonClearEntry = new javax.swing.JButton();
        jButtonEnter = new javax.swing.JButton();
        jButtonAddition = new javax.swing.JButton();
        jButtonSubtraction = new javax.swing.JButton();
        jButtonMultiplication = new javax.swing.JButton();
        jButtonDivision = new javax.swing.JButton();
        jButtonPowerOf = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextArea1 = new javax.swing.JTextArea();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("RPN Calculator by Gage release 1.0");
        setBackground(new java.awt.Color(153, 153, 153));
        setResizable(false);

        jButton1.setText("1");

        jButton4.setText("4");

        jButton7.setText("7");

        jButton2.setText("2");

        jButton5.setText("5");

        jButton8.setText("8");

        jButtonZero.setText("0");

        jButton3.setText("3");

        jButton6.setText("6");

        jButton9.setText("9");

        jButtonDecimal.setText(".");

        jButtonClear.setText("C");

        jButtonClearEntry.setText("CE");

        jButtonEnter.setText("ENTER");

        jButtonAddition.setText("+");

        jButtonSubtraction.setText("-");

        jButtonMultiplication.setText("*");

        jButtonDivision.setText("/");

        jButtonPowerOf.setText("^");

        jTextArea1.setEditable(false);
        jTextArea1.setColumns(20);
        jTextArea1.setFont(new java.awt.Font("Consolas", 0, 14)); // NOI18N
        jTextArea1.setRows(5);
        jScrollPane1.setViewportView(jTextArea1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(98, 98, 98)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jButton4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(jButton1)
                            .addComponent(jButton7, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(jButtonClear, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addGap(30, 30, 30)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(jButtonZero, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(jButton8))
                                    .addComponent(jButton5, javax.swing.GroupLayout.PREFERRED_SIZE, 45, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(30, 30, 30)
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(jButton6)
                                    .addComponent(jButton9)
                                    .addComponent(jButtonDecimal, javax.swing.GroupLayout.PREFERRED_SIZE, 39, javax.swing.GroupLayout.PREFERRED_SIZE)))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jButton2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addGap(30, 30, 30)
                                .addComponent(jButton3))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jButtonClearEntry)
                                .addGap(30, 30, 30)
                                .addComponent(jButtonEnter)))
                        .addGap(25, 25, 25)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jButtonPowerOf)
                            .addComponent(jButtonDivision, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(jButtonMultiplication, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(jButtonAddition)
                            .addComponent(jButtonSubtraction, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(63, 63, 63)
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 403, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(62, Short.MAX_VALUE))
        );

        layout.linkSize(javax.swing.SwingConstants.HORIZONTAL, new java.awt.Component[] {jButton1, jButton2, jButton3, jButton4, jButton6, jButton7, jButton8, jButton9, jButtonAddition, jButtonClear, jButtonClearEntry, jButtonDecimal, jButtonDivision, jButtonMultiplication, jButtonPowerOf, jButtonSubtraction, jButtonZero});

        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(20, 20, 20)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 167, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 35, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButton1)
                    .addComponent(jButton2)
                    .addComponent(jButton3)
                    .addComponent(jButtonAddition))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButton4)
                    .addComponent(jButton5)
                    .addComponent(jButton6)
                    .addComponent(jButtonSubtraction))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButton7)
                    .addComponent(jButton8)
                    .addComponent(jButton9)
                    .addComponent(jButtonMultiplication))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButtonZero)
                    .addComponent(jButtonDecimal)
                    .addComponent(jButtonDivision))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButtonClear)
                    .addComponent(jButtonClearEntry)
                    .addComponent(jButtonEnter)
                    .addComponent(jButtonPowerOf))
                .addGap(51, 51, 51))
        );

        layout.linkSize(javax.swing.SwingConstants.VERTICAL, new java.awt.Component[] {jButton1, jButton2, jButton3, jButton4, jButton5, jButton6, jButton7, jButton8, jButton9, jButtonAddition, jButtonClear, jButtonClearEntry, jButtonDecimal, jButtonDivision, jButtonMultiplication, jButtonPowerOf, jButtonSubtraction, jButtonZero});

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JButton jButton6;
    private javax.swing.JButton jButton7;
    private javax.swing.JButton jButton8;
    private javax.swing.JButton jButton9;
    private javax.swing.JButton jButtonAddition;
    private javax.swing.JButton jButtonClear;
    private javax.swing.JButton jButtonClearEntry;
    private javax.swing.JButton jButtonDecimal;
    private javax.swing.JButton jButtonDivision;
    private javax.swing.JButton jButtonEnter;
    private javax.swing.JButton jButtonMultiplication;
    private javax.swing.JButton jButtonPowerOf;
    private javax.swing.JButton jButtonSubtraction;
    private javax.swing.JButton jButtonZero;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextArea jTextArea1;
    // End of variables declaration//GEN-END:variables
	
    void addCalculateListener(ActionListener listenForDigitButton) {
        
        jButton1.addActionListener(listenForDigitButton);
        jButton2.addActionListener(listenForDigitButton);		
        jButton3.addActionListener(listenForDigitButton);		
        jButton4.addActionListener(listenForDigitButton);		
        jButton5.addActionListener(listenForDigitButton);		
        jButton6.addActionListener(listenForDigitButton);		
        jButton7.addActionListener(listenForDigitButton);		
        jButton8.addActionListener(listenForDigitButton);		
        jButton9.addActionListener(listenForDigitButton);	
        jButtonAddition.addActionListener(listenForDigitButton);
        jButtonClear.addActionListener(listenForDigitButton);		
        jButtonClearEntry.addActionListener(listenForDigitButton);		
        jButtonDecimal.addActionListener(listenForDigitButton);		
        jButtonDivision.addActionListener(listenForDigitButton);		
        jButtonEnter.addActionListener(listenForDigitButton);		
        jButtonMultiplication.addActionListener(listenForDigitButton);		
        jButtonPowerOf.addActionListener(listenForDigitButton);		
        jButtonSubtraction.addActionListener(listenForDigitButton);		
        jButtonZero.addActionListener(listenForDigitButton);		
    }

    void updateView(String message) {
        // This procedure updates the Text Area component with new
        // text information.
        
        jTextArea1.append(message);
        
    }  // end updateView
    
}  // end CalcRPNView