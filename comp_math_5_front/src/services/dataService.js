import {getDouble, getXArray, getYArray} from "../util/validator";
import axios from "axios";

const API_DATA_URL = "http://localhost:8082/vichka";

export async function sendDots(dotsData, argument){
    let xArray = getXArray(dotsData);
    let yArray = getYArray(dotsData);
    let arg = getDouble(argument);
    console.log(xArray);
    console.log(yArray);
    console.log(arg);
    for (let i = 0; i < dotsData.length; i++) {
        if (isNaN(xArray[i]) || isNaN(yArray[i] || isNaN(arg))) {
            alert("data is not valid");
            return;
        }
    }
    return await axios.post(API_DATA_URL + "/calculate", {
        "xArray" : xArray,
        "yArray" : yArray,
        "argument" : arg
    });
}