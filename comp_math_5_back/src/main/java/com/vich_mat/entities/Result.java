package com.vich_mat.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
public class Result {
    double [][] finiteDifferences;
    double[] graphXArray;
    ArrayList<Double> newtonYArray;
    ArrayList<Double> newtonXArray;
    double lagrangeValue;
    double newtonValue;

    ArrayList<Double> lagrangeYArray;
    ArrayList<Double> lagrangeXArray;



}
