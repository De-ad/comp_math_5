import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectError, selectLoading, selectResult} from "../store/slices/resultSlice";

const Table = () => {
    const result = useSelector(selectResult);
    const isLoading = useSelector(selectLoading);
    const hasError = useSelector(selectError);

    if(Object.keys(result).length === 0){
        return null;
    }

    return (
        <div>
            {isLoading ? (
                <div> loading ... </div>
            ) : hasError ? (
                <div>error</div>
            ) : (
                <div className="bg-white rounded-lg flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        {result.finiteDifferences.map((row, index) => (
                                            <th key={index} scope="col" className="px-6 py-4">d{index+1}</th>
                                        ))}

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {result.finiteDifferences.map((row, index) => (
                                        <tr key={index}
                                            className="border-b dark:border-neutral-500">
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex}
                                                    className="whitespace-nowrap px-6 py-4">{cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;