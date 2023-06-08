import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setArgument} from "../store/slices/argumentSlice";
import {setDots} from "../store/slices/dotsSlice";

const FileInput = () => {
    const dispatch = useDispatch();
    const setArgumentFromFile = (value) => {
       dispatch(setArgument(value));
    }

    const handleFileChange = (e) => {
        const newObjects = [];
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = () => {
            const lines = reader.result.split("\n");
            let dotsArray = new Array(lines.length);
            dotsArray = lines.map((item) => (item.split(","
            )))
            // dotsArray consists of [arrayx, arrayy, arrayargument]
            for (let i = 1; i <= dotsArray[0].length ; i++){
                const obj = {
                    number : i,
                    x : dotsArray[0][i - 1],
                    y : dotsArray[1][i-1],
                };
                newObjects.push(obj)
            }
            setArgumentFromFile(dotsArray[2][0]);
            dispatch(setDots(newObjects));
        };
        // setDotsData(newObjects);
    };




    return (
    <div>
        <input
            id="file1"
            type="file"
            accept=".txt"
            className="py-3"
            onChange={handleFileChange}
        />

    </div>
    );
};

export default FileInput;