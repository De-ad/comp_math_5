import {isNumber} from "chart.js/helpers";
import {useDispatch} from "react-redux";




export const validateInterval = (interval) => {
    if (interval[0] >= interval[1]){
        return ("left border should be lower than right");
    }
    return true;
}

export const validateCount = (count) => {
    if (count > 10) {
        return "Global interpolation, when interpolation policy is built immediately\n" +
            "on all interpolation nodes, becomes practically unsuitable at n > 10";
    }
    return true;
}

export const getXArray = (dotsData) => {
    let xArray = new Array(dotsData.length);
    xArray = dotsData.map((item) => (
        xArray[item.number] = parseFloat(item.x.replace(/,/g, "."))
    ));
    return xArray
}

export const getYArray = (dotsData) => {
    let yArray = new Array(dotsData.length);
    yArray = dotsData.map((item) => (
        yArray[item.number] = parseFloat(item.y.replace(/,/g, "."))
    ));
    return yArray;
}


export const getDouble = (number) => {
    if (isNaN(number) || !isNumber(number)) {

        return;
    }
    number = parseFloat(number.replace(/,/g, "."));
    return number;
}