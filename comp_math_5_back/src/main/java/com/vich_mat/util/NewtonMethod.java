package com.vich_mat.util;

import com.vich_mat.entities.Dots;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@Component
public class NewtonMethod {
    double x;
    double t;
    double[] xArray;
    double[] yArray;
    int n;
    int iValue;
    ArrayList<Double> graphXArray;
    ArrayList<Double> graphYArray;
    boolean forward = false;
    double[][] finiteDifferences;
    int amount;

    public double calculate(Dots dots, double[][] finiteDifferences){
        this.finiteDifferences = finiteDifferences;
        x = dots.getArgument();
        n = dots.getN();
        amount = n*2;
        xArray = dots.getXArray();
        yArray = dots.getYArray();
        return calculateWithCustomArg(x);
    }

    public double calculateWithCustomArg(double arg){
        t = (arg - calculateXforT(arg))/(Math.abs(xArray[1] - xArray[0]));
        return forward ? forward(iValue) : backward(iValue);
    }

    public double forward(int iVal){
            double result = yArray[iVal];
            for (int i = 1; i < n; i++) {
                double temp = calculateTSum(i) * finiteDifferences[i - 1][iVal] / factorial(i);
                result += temp;
            }
            return result;
    }

    public double backward(int iVal){
        System.out.println(iVal);
            double result = yArray[iVal];
            for (int i = 1; i < n; i++) {
                result += calculateTSum(i) * finiteDifferences[i - 1][n - i - 1]/ factorial(i);
            }
            return result;
    }


    private double calculateXforT(double x){
        forward = (xArray[n/2] >=                                                                                                            x);
        double left ;
        double right ;
        for(int i = 0; i < n - 1; i ++){
            left = xArray[i];
            right = xArray[i+1];
            if (x >= left && x <= right){
                iValue = (forward) ? i : i + 1;
                return (forward) ? left : right;
            }
        }
        return 0;
    }

    private double calculateTSum(int num){
        if (num == 1){
            return t;
        }
        return (forward) ? (t - num + 1) * calculateTSum(num - 1)
                :  (t + num - 1) * calculateTSum(num - 1);
    }

    private int factorial(int number){
        if (number == 1){
            return 1;
        }
        return number * factorial(number - 1);
    }


    public ArrayList<Double> getGraphXArray(){
        ArrayList<Double> temp = new ArrayList<>();
//        add all origin x
        for (double v : xArray) {
            temp.add(v);
        }
//      add additional x
        double step = (xArray[n-1] - xArray[0]) / amount;
//        from 1 because of multiply
        for (int i = 1; i < amount ; i++){
            temp.add(xArray[0] + i * step);
        }
         Collections.sort(temp);
        graphXArray = temp;

        return graphXArray;



    }

    public ArrayList<Double> getGraphYArray(){
        graphYArray = new ArrayList<>();
        for (Double aDouble : graphXArray) {
            graphYArray.add(calculateWithCustomArg(aDouble));
        }
        return graphYArray;
    }
}
