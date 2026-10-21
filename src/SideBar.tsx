
const sidebarItems = ["Projects", "Dashboard" , "Todo", "Students"]
const SideBar = ({active, setActive}) => {

    return ( <aside className="sidebar">
       <ul className="sidebar-items">
            {sidebarItems.map((item, index) => (
                <li key={index}>
                    <button className={item == active ? "active": undefined}
                            onClick={() => setActive(item)}>{item}</button>
                </li>
            ))}
       </ul>
    </aside>
   )
};

export default SideBar;