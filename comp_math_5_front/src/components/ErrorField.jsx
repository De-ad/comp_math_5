import React from 'react';
import {useSelector} from "react-redux";

const ErrorField = () =>{
    const message = useSelector(state => state.error.value);

    return (
        <div className="w-96">
            {message}
        </div>
    );
};

export default ErrorField;