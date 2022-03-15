import React, {useEffect, useState} from "react"
import Header from "../components/Header"
import Connecting from "../components/Connecting";
import NotFound from "../components/NotFound";
import MainView from "../components/MainView";
import SideNavigation from "../components/SideNavigation";

function Home(){

    const [databaseFetchState, setDatabaseFetchState] = useState({
        error: false,
        fetching: false
    })
    const [databases, setDatabases] = useState([])

    useEffect(() => {
        fetchDatabases()
    }, [])

    function fetchDatabases(){
        setDatabaseFetchState({error: false, fetching: true})
        fetch('api/databases')
            .then((res) => res.json())
            .then((data) => {
                if(Array.isArray(data)) {
                    setDatabaseFetchState({error: false, fetching: false})
                    setDatabases(data)
                } else
                    setDatabaseFetchState({error: true, fetching: false})
            })
    }

    return (
        <div className={"flex flex-1 flex-col bg-slate-100"}>
            <Header />
            {databaseFetchState.error ? (
                <NotFound reconnect={fetchDatabases} />
            ) : (
                databaseFetchState.fetching ? (
                    <Connecting />
                ) : (
                    <>
                        <SideNavigation databases={databases} />
                        <MainView />
                    </>
                )
            )}
        </div>
    )
}

export default Home