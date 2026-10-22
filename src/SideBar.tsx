import {NavLink} from "react-router";

const sidebarItems = [
    {path: "/projects", name: "Projects"},
    {path: "/", name: "Dasboard"},
    {path: "/todos", name: "Todo"},
    {path: "/students", name: "Students"}
]
const SideBar = () => {

    return ( <aside className="sidebar">
       <ul className="sidebar-items">
            {sidebarItems.map((item, index) => (
                <li key={index}>
                    {/*<button className={item == active ? "active": undefined}*/}
                    {/*        onClick={() => setActive(item)}>{item}</button>*/}
                    <NavLink to={item.path} end={item.path === "/"}>
                        {item.name}
                    </NavLink>
                </li>
            ))}
       </ul>
    </aside>
   )
};

export default SideBar;