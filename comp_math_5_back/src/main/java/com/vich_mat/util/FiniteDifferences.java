package com.vich_mat.util;

import com.vich_mat.entities.Dots;
import org.springframework.stereotype.Component;

import static com.vich_mat.util.Rounding.round;

@Component
public class FiniteDifferences {
    int n;
    double[] yArray;

    public double[][] calculate(Dots dots){
        this.n = dots.getN();
        this.yArray = dots.getYArray();
        double[][] finalDifferences = new double[n - 1][n - 1];
        int temp = n;
        for(int i = 0; i < n; i++){
            for (int j = 0; j < temp - 1; j++){
                if (i == 0) {
                    finalDifferences[i][j] = round(yArray[j + 1] - yArray[j]) ;

                }
                else {
                    finalDifferences[i][j] = round(finalDifferences[i - 1][j + 1] - finalDifferences[i - 1][j]);
                }

            }
            temp--;

        }

        return finalDifferences;
    }


}
