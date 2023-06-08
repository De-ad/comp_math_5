import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDouble, validateCount, validateInterval} from "../util/validator";
import {setDots} from "../store/slices/dotsSlice";
import {setError} from "../store/slices/errorSlice";

const FunctionInput = () => {
    const [functionValue, setFunctionValue] = useState("");
    const [interval, setInterval] = useState([0,0]);
    const [count, setCount] = useState("");
    const dotsData = useSelector((state) => state.dots.value);
    const dispatch = useDispatch();

    const handleRadioChange = (e) => {
        setFunctionValue(e.target.value);
    }


    const handleSetInterval = (e) => {
        e.preventDefault();
        let result = validateInterval(interval);
        if(result.toString() == "true"){
            let left = getDouble(interval[0]);
            let right = getDouble(interval[1]);
            let number = getDouble(count);
            let step = (right - left)/ (number - 1);
            const newObjects = [];
            switch (functionValue){
                case "sin":
                    for (let i = 1; i <= number; i++){
                        let x = (left + i * step);
                        let y = (Math.sin(x)).toString();
                        x = x.toString();
                        const obj = {
                            number : i,
                            x : x,
                            y : y
                        };
                        newObjects.push(obj);

                    }
                    console.log(newObjects);
                    console.log("hello mir")
                    dispatch(setDots(newObjects));
                    console.log(dotsData);
                    return newObjects;
                case "polynomial":
                    for (let i = 1; i <= number; i++){
                        let x = (left + (i - 1) * step).toString();
                        let y = ((Math.pow(x, 4) - Math.pow(x,3) * 3 + 7* Math.pow(x, 2) + 2)).toString();
                        const obj = {
                            number : i,
                            x : x,
                            y : y
                        };
                        newObjects.push(obj);
                    }
                    dispatch(setDots(newObjects));
                    console.log(dotsData);
                    return newObjects;
                default:
                    return ;
            }
        }
        else{
            dispatch(setError(result));
        }

    }



    const changeLeftBorder = (e) => {
        dispatch(setError(""));
        const newValue = [e.target.value, interval[1]];
        setInterval(newValue);
    }

    const handleCountChange = (e) => {
        setCount(e.target.value);
        let result = validateCount(e.target.value);
        if (result == "true"){
            dispatch(setError(""));
        }
        else{
            dispatch(setError(result));
        }
    }

    const changeRightBorder = (e) => {
        dispatch(setError(""));
        const newValue = [interval[0], e.target.value];
        setInterval(newValue);
    }



    return (
        <div className="grid pb-3 ">
            <div>
                <input type="radio" name="func" id="polynomial" value="polynomial" onChange={handleRadioChange}/>
                -1.8 x³ - 2.94 * x² + 10.37 * x + 5.38
            </div>
            <div>
            <input type="radio" name="func" id="sin" value="sin" onChange={handleRadioChange}/>
                sin(x)
            </div>
            <div className="grid space-y-3 place-items-center">
                    <div> left border :</div>
                <input
                    value={interval[0]}
                    type="text"
                    onChange={changeLeftBorder}
                    className="rounded-full p-2"
                    placeholder="type left border"/>
                    <div> right border : </div>
                    <input
                        value={interval[1]}
                        type="text"
                        onChange={changeRightBorder}
                        className="rounded-full p-2"
                        placeholder="type right border"/>
                <div> number of dots :</div>
                <input
                    value={count}
                    type="text"
                    onChange={handleCountChange}
                    className="rounded-full p-2"
                    placeholder="type dots number"/>
                <div>
                    <button
                        onClick={handleSetInterval}
                        className="border-2 w-fit bg-white px-3 rounded-full">
                        set interval
                    </button>
                </div>
           </div>



        </div>
    );
};

export default FunctionInput;