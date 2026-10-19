const navItems = ["Home", "About", "Contacts", "Student"]

const NavBar = () => (
    <nav className="navbar">
        {
            navItems.map((item, index) => (
                <a key={index} href={`#${item.toLocaleLowerCase()}`}>{item}</a>
            ))
        }

    </nav>
)

export default NavBar