import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setDots} from "../store/slices/dotsSlice";
import {setError} from "../store/slices/errorSlice";

const UserCoordsInput = () => {
    const arr = useSelector((state) => state.dots.value);
    const dotsData = useSelector((state) => state.dots.value);
    const dispatch = useDispatch();

    useLayoutEffect(() =>{
        const newObjects = [];
        for(let i = 1; i <= 8 ; i++){
            const obj = {
                number : i,
                x : '',
                y : ''
            };
            newObjects.push(obj);
        }
        dispatch(setDots(newObjects));
    },[]);

    const onChangeX = (e, number) => {
        const editData = dotsData.map((item) => (
            item.number === number ? {...item, x: e.target.value} : item
        ))
        dispatch(setDots(editData));
    }

    const onChangeY = (e, number) => {
        const editData = dotsData.map((item) => (
            item.number === number ? {...item, y: e.target.value} : item
        ))
        dispatch(setDots(editData));
    }
    const handleFieldAdd = (e) => {
        e.preventDefault();
        const values = [...dotsData];
        if (dotsData.length < 10){
            dispatch(setError(""));
            values.push({
                number : dotsData.length + 1,
                x : "",
                y : ""
            });
             dispatch(setDots(values));

            return;
        }
        dispatch(setError("max 10 dots"));
    }

    const handleFieldDelete = (e) => {
        e.preventDefault();
        const values = [...dotsData];
        if (dotsData.length > 5) {
            dispatch(setError(""));
            values.pop();
            dispatch(setDots(values));
            return;
        }
        dispatch(setError("min 5 dots"));
    }
    return (
        <div>
            <div>
                <div>
                    <table className="table-auto">
                        <thead>
                        <tr>
                            <th> № </th>
                            <th> X </th>
                            <th> Y </th>
                        </tr>
                        </thead>
                        <tbody>
                        {dotsData.map(({number, x , y}) => (
                            <tr key={number}>
                                <td className="p-2">{number}</td>
                                <td className="p-2">
                                    <input
                                        value={x}
                                        type="text"
                                        onChange={(e) => onChangeX(e, number)}
                                        className="rounded-full p-2"
                                        placeholder="type x value"/>
                                </td>
                                <td className="p-2">
                                    <input
                                        type="text"
                                        placeholder="type y value"
                                        onChange={(e) => onChangeY(e, number)}
                                        className="rounded-full p-2"
                                        value={y}/>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                    {/* buttons */}
                    <div className="flex justify-between py-2">
                    <div className="border-2 w-fit bg-white px-3 rounded-full">
                        <button onClick={handleFieldAdd}> add field</button>
                    </div>
                    <div className="border-2 w-fit bg-white px-3 rounded-full">
                        <button onClick={handleFieldDelete}> delete field</button>
                    </div>

                    </div>

                </div>
                </div>
        </div>
    );
};

export default UserCoordsInput;