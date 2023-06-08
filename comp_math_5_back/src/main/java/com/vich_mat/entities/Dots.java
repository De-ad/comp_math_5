package com.vich_mat.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;

import static com.vich_mat.util.Rounding.round;

@Getter
@Setter
@AllArgsConstructor
public class Dots {
    private double[] xArray;
    private double[] yArray;
    private int n;
    private double argument;
    private int graphAmount;


    public double[] getGraphXArray(){
        double[] graphXArray = new double[graphAmount];
        graphXArray[0] = xArray[0];
        graphXArray[graphAmount - 1] = xArray[n-1];
        double step = (xArray[n-1] - xArray[0]) / graphAmount;
        for (int i = 1; i < graphAmount-1; i++){
            graphXArray[i] = graphXArray[i - 1] + step;

        }
        return  graphXArray;
    }

}
