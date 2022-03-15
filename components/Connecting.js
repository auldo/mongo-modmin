import React from "react";

function Connecting(){

    return (
        <div className={"absolute flex flex-col items-center justify-center top-[80px] left-0 right-0 bottom-0 bg-white shadow-xl m-5 p-3"}>
            <h1 className={"text-4xl font-bold mb-10"}>Connecting...</h1>
            <div className={"loader"}>
            </div>
            <p className={"font-light mt-10"}>Mongo-Modmin currently tries to connect to the database. Please be patient.</p>
        </div>
    )
}

export default Connecting