import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setArgument} from "../store/slices/argumentSlice";
import {getResult, setResult} from "../store/slices/resultSlice";
import {getDouble} from "../util/validator";
import {setError} from "../store/slices/errorSlice";

const ArgumentSend = () => {
    const argument = useSelector((state) => state.argument.value);
    const dots = useSelector((state) => state.dots.value);
    const dispatch = useDispatch();



    const onChangeArgument = (e) => {
        const newValue = e.target.value;
        dispatch(setArgument(newValue));
        if (newValue!= undefined){if (getDouble(newValue) < getDouble(dots[0].x) || getDouble(newValue) > getDouble(dots[dots.length - 1].x) ){
            dispatch(setError("argument should be inside interval"));
        }
        else{
            dispatch(setError(""));

        }

        }

    }

    const handleSend = () => {
        const data = {dots, argument};
        console.log(data);
        dispatch(getResult(data));
    }


    return (
        <div className="space-y-3 grid justify-center">
            <div>
                <input
                    value={argument}
                    type="text"
                    onChange={onChangeArgument}
                    className="rounded-full p-2"
                    placeholder="type argument value"/>
            </div>
            <div>
                <div className="border-2 w-fit bg-white px-3 rounded-full">
                    <button onClick={handleSend}> send </button>
                </div>
            </div>

        </div>
    );
};

export default ArgumentSend;