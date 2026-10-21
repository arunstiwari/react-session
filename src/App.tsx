import NavBar from './NavBar'
import  './App.css'
import SideBar from "./SideBar.tsx";
import {useState} from "react";
import Dashboard from "./Dashboard.tsx";
import Projects from "./Projects.tsx";
import Todo from "./Todo.tsx";
import StudentApp from "./StudentApp.tsx";

const  App = () => {
    const [active, onSelect] = useState("Dashboard");
    return (
        <div className="layout">
            <NavBar/>
            <div className="layout-body">
                <SideBar active={active} setActive={onSelect}/>
                <main className="content">
                    {active === "Dashboard" ? (<Dashboard />) :
                      active == "Projects" ?  (<Projects />) :
                      active == "Todo" ?  (<Todo />) : <StudentApp />
                    }
                </main>
            </div>

        </div>

    )
}

export default App
