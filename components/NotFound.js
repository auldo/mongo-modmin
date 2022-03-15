import React from "react";

function NotFound(props){

    return (
        <div className={"absolute flex flex-col items-center justify-center top-[80px] left-0 right-0 bottom-0 bg-white shadow-xl m-5 p-3"}>
            <h1 className={"text-4xl font-bold mb-10"}>Database Not Found</h1>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <p className={"font-light mt-10"}>The requested database could not be found. Please make sure to insert the right information in the docker compose file.</p>
            <button className={"mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded"} onClick={props.reconnect}>Try Again</button>
        </div>
    )
}

export default NotFound