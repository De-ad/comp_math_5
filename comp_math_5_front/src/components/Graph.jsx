import React from 'react';
import Plot from "react-plotly.js";
import {useSelector} from "react-redux";
import {selectResult} from "../store/slices/resultSlice";
import {getXArray, getYArray} from "../util/validator";

const Graph = () => {
    const result = useSelector(selectResult);
    const dotsData = useSelector((state) => state.dots.value);

    if(Object.keys(result).length === 0){
        return null;
    }
    const xNewtonArray = result.newtonXArray;
    const yNewtonArray = result.newtonYArray;
    const xLagrangeArray = result.lagrangeXArray;
    const yLagrangeArray = result.lagrangeYArray;
    const yArray = getYArray(dotsData);
    const xArray = getXArray(dotsData);
    console.log(xNewtonArray);
    console.log(yNewtonArray);

    const func = {
        x: xArray,
        y: yArray,
        mode: 'markers',
        type: 'scatter',
        marker : {size: 12},
        name: "origin"
    }

    const newton = {
        x: xNewtonArray,
        y: yNewtonArray,
        mode: "lines+markers",
        name: "newton",
}
    const lagrange = {
        x : xLagrangeArray,
        y : yLagrangeArray,
        mode: "lines+markers",
        marker : {size: 8},
        name: "lagrange"
    }

    if (Object.keys(result).length === 0){
        return null;
    }

    return (
        <div>
            <Plot
                data={[func, lagrange, newton]}
                layout={{width: 1200, height: 700}}>

            </Plot>
        </div>
    );
};

export default Graph;