import React from 'react';
import UserCoordsInput from "./UserCoordsInput";
import Graph from "./Graph";
import FileInput from "./FileInput";
import FunctionInput from "./FunctionInput";
import {useState} from "react";
import ArgumentSend from "./ArgumentSend";

const Dropdown = () => {
    const [component, setComponent] = useState("select input");

    const renderComponent = () => {
        switch (component){
            case "user input":
                return <div>
                    <UserCoordsInput/>
                    <ArgumentSend/>
                     </div>
            case "file input":
                return <div>
                    <FileInput/>
                    <ArgumentSend/>
                </div>
            case "function input":
                return <div>
                    <FunctionInput/>
                    <ArgumentSend/>
                </div>
            default:
                return null;
        }
    }

    const changeComponent = (e) => {
        setComponent(e.target.value);
    }

    return (
        <div>
            <select value={component} onChange={changeComponent} className="p-1 rounded-full">
                <option> select input</option>
                <option value="user input" >
                    user input
                </option>
                <option value="file input">
                    file input
                </option>
                <option value="function input" >
                    function input
                </option>
            </select>
            {renderComponent()}
        </div>
    );
};

export default Dropdown;