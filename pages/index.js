import React from "react";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import MainView from "../components/MainView";

function Home(){

    return (
        <div className={"flex flex-1 flex-col bg-slate-100"}>
            <Header />
            <SideNavigation />
            <MainView />
        </div>
    )
}

export default Home