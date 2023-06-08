package com.vich_mat.util;

import com.vich_mat.entities.Dots;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class LagrangeMethod {
    double[] xArray;
    double[] yArray;
    int n;
    double x;
    double[] graphX;
    double[] graphY;
    int amount;

    public double calculate(Dots dots, double[] graphX){
        this.xArray = dots.getXArray();
        amount = dots.getGraphAmount();
        this.graphX = graphX;
        this.yArray = dots.getYArray();
        this.n = dots.getN();
        this.x = dots.getArgument();
        return calculateForX(this.x);
    }

    public double calculateForX(double x){
        double polynomial = 0;
        for (int i = 0; i < n; i++){
            polynomial += calculateL_i(i, x);
        }
        return polynomial;
    }


    public double calculateL_i(int order, double x){
        double numerator = 1;
        double xi = xArray[order];
        double denominator = 1;
        double temp;
        double temp2;
        for (int i = 0; i < n; i++){
            if (i != order) {
                temp = x - xArray[i];
                numerator *= temp;
                temp2 = xi - xArray[i];
                denominator *= temp2;
            }
        }
        return numerator * yArray[order]/denominator;
    }


    public ArrayList<Double> getYArray(ArrayList<Double> xArray){
        ArrayList<Double> yArray = new ArrayList<>();
        for(double val : xArray){
            yArray.add(calculateForX(val));
        }
        return yArray;
    }


//    public double calculateCustom(double xi){
//        double polynomial = 0;
//        for (int i = 0; i < n; i++){
//            polynomial += calculateL_i(i);
//            double numerator = 1;
//            double denominator = 1;
//            double temp;
//            double temp2;
//            for (int i = 0; i < n; i++){
//                if (i != order) {
//                    temp = x - xArray[i];
//                    numerator *= temp;
//                    temp2 = xi - xArray[i];
//                    denominator *= temp2;
//                }
//            }
//            return numerator * yArray[order]/denominator;
//        }
//    }
//
//    public double[] getYGraphArray(){
//        graphY = new double[amount];
//        for(int i = 0; i < amount; i++){
//            graphY[i] = calculateCustom(graphX[i]);
//        }
//    }
}
