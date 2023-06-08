import React from 'react';
import {useSelector} from "react-redux";
import {selectResult} from "../store/slices/resultSlice";

const ResultField = () => {
    const result = useSelector(selectResult);

    if(Object.keys(result).length === 0){
        return null;
    }

    return (
        <div className="bg-white h-fit p-4 rounded-lg">
            <div>Lagrange : {result.lagrangeValue}</div>
            <div>Newton : {result.newtonValue}</div>
        </div>
    );
};

export default ResultField;