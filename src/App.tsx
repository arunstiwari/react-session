import NavBar from './NavBar'
import  './App.css'
import SideBar from "./SideBar.tsx";
import {lazy, Suspense, useState} from "react";
import Dashboard from "./Dashboard.tsx";
import Projects from "./Projects.tsx";


// Change to lazy loading
// import Todo from "./Todo.tsx";
const Todo = lazy(() => import("./Todo.tsx"));
const  StudentApp  = lazy(()=> import("./StudentApp.tsx") ) ;

//Suspense
const  App = () => {
    const [active, onSelect] = useState("Dashboard");
    return (
        <div className="layout">
            <NavBar/>
            <div className="layout-body">
                <SideBar active={active} setActive={onSelect}/>
                <main className="content">
                    {
                        active === "Dashboard" ? (<Dashboard />) :
                        active === "Projects" ?  (<Projects />) :<p></p>}
                    <Suspense fallback={<div>Loading...</div>}>
                        {
                         active === "Todo" ? (<Todo />) :
                         active === "Students" ? (<StudentApp />): <p></p>}
                    </Suspense>

                </main>
            </div>

        </div>

    )
}

export default App
