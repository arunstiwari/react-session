import NavBar from './NavBar'
import  './App.css'
import SideBar from "./SideBar.tsx";
import {lazy, Suspense, useState} from "react";
import Dashboard from "./Dashboard.tsx";
import Projects from "./Projects.tsx";
import {Routes, Route} from "react-router";
import Page from "./Page.tsx";
import NotFound from "./NotFound.tsx";


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
                    {/*{*/}
                    {/*    active === "Dashboard" ? (<Dashboard />) :*/}
                    {/*    active === "Projects" ?  (<Projects />) :<p></p>}*/}
                    {/*<Suspense fallback={<div>Loading...</div>}>*/}
                    {/*    {*/}
                    {/*     active === "Todo" ? (<Todo />) :*/}
                    {/*     active === "Students" ? (<StudentApp />): <p></p>}*/}
                    {/*</Suspense>*/}
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element ={<Page title="Dashboard"><Dashboard /></Page>}></Route>
                            <Route path="/projects" element ={<Page title="Projects"><Projects /></Page>}></Route>
                            <Route path="/todos" element ={<Page title="Todo"><Todo /></Page>}></Route>
                            <Route path="/students" element ={<Page title="Students App"><StudentApp /></Page>}></Route>
                            <Route path="*" element={ <NotFound /> } />

                        </Routes>


                    </Suspense>


                </main>
            </div>

        </div>

    )
}

export default App
