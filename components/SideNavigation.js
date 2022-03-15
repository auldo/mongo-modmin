import React, {useEffect, useState} from "react";

function SideNavigation(props){

    return (
        <div className={"absolute flex flex-col top-[80px] bottom-0 left-0 w-[300px] bg-white shadow-xl m-5"}>
            {props.databases.map(db => (
                <div
                    key={db.name}
                    className={"h-[60px] px-4 flex items-center cursor-pointer hover:bg-gray-100 uppercase font-light truncate"}>
                    {db.name}
                </div>
            ))}
            <button className={"h-[40px] shadow rounded mb-5 mx-5 mt-auto flex items-center justify-center cursor-pointer bg-teal-600 text-white hover:bg-teal-800"}>
                Create Database
            </button>
        </div>
    )
}

export default SideNavigation