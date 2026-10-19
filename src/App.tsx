import NavBar from './NavBar'
import  './App.css'
import SideBar from "./SideBar.tsx";
import {useState} from "react";

const  App = () => {
    const [active, onSelect] = useState("Dashboard");
    return (
        <div className="layout">
            <NavBar/>
            <div className="layout-body">
                <SideBar active={active} setActive={onSelect}/>
            </div>

        </div>

    )
}

export default App
