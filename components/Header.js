import React from "react";

function Header(){

    return (
        <div className={"flex items-center justify-center bg-teal-700 text-white h-[80px]"} id={"header"}>
            <h1 className={"font-extralight text-4xl"}>Mongo-Modmin</h1>
            <span className={"self-start mt-4 ml-2 font-thin"}>v. 0.0.1</span>
        </div>
    )
}

export default Header