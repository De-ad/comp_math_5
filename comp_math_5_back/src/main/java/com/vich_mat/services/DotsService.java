package com.vich_mat.services;

import ch.qos.logback.classic.helpers.MDCInsertingServletFilter;
import com.vich_mat.entities.Dots;

import com.vich_mat.entities.Result;
import com.vich_mat.payload.SuccessResponse;
import com.vich_mat.payload.DotsRequest;
import com.vich_mat.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DotsService {

    @Autowired
    LagrangeMethod lagrangeMethod;

    @Autowired
    NewtonMethod newtonMethod;

    @Autowired
    FiniteDifferences finiteDifferences;


    public Result calculate(@RequestBody DotsRequest request) {
        Dots dots = new Dots(request.getXArray(), request.getYArray(), request.getYArray().length, request.getArgument(), 25);
        double[][] diff = finiteDifferences.calculate(dots);
        double[] xArray = dots.getGraphXArray();
        double lagrangeResult =  lagrangeMethod.calculate(dots, xArray);
        double newtonResult = newtonMethod.calculate(dots, diff);

        ArrayList<Double> xArrayNewton = newtonMethod.getGraphXArray();
        ArrayList<Double> yArrayNewton = newtonMethod.getGraphYArray();
        yArrayNewton.forEach(System.out::println);
        ArrayList<Double> yArrayLagrange = lagrangeMethod.getYArray(xArrayNewton);
        Result result = new Result(diff, xArray, yArrayNewton, xArrayNewton, lagrangeResult,
                newtonResult, yArrayLagrange, xArrayNewton);
        return result;
    }
}
