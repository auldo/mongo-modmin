import React, {useEffect, useState} from "react";
import DocumentModal from "./DocumentModal";

function MainView(props){

    const [selectedCollection, setSelectedCollection] = useState(undefined)
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        setSelectedCollection(undefined)
        setDocuments([])
    }, [props.database])

    useEffect(() => {
        if(setSelectedCollection !== undefined){
            fetchDocuments()
        }
    }, [selectedCollection])

    function fetchDocuments(){
        if(props.database !== undefined && selectedCollection !== undefined){
            fetch('api/documents?database=' + props.database + "&collection=" + selectedCollection)
                .then((res) => res.json())
                .then((data) => {
                    if(Array.isArray(data)) {
                        setDocuments(data)
                    }
                })
        }
    }

    return (
        <div className={"absolute flex flex-col top-[80px] left-[310px] right-0 bottom-0 bg-white shadow-xl m-5"}>
            <div className={"flex m-5"}>
                {props.collections.map(col => (
                    <div
                        onClick={() => {setSelectedCollection(col)}}
                        className={"flex items-center justify-center px-4 py-5 border-2 border-teal-600 cursor-pointer rounded text-white bg-teal-600" + (selectedCollection !== undefined && selectedCollection === col ? " border-teal-800" : "")}>
                        {col}
                    </div>
                ))}
            </div>
            <div className={"flex overflow-auto"}>
                <div className={"flex flex-1 flex-col overflow-auto"}>
                    {documents.map(doc => (
                        <div className={"m-2"}>
                            <DocumentModal data={doc} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainView