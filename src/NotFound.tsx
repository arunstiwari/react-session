import {useLocation} from "react-router";

const NotFound = () => {
    const location = useLocation();

    return (
        <>
            <h2>Page Not Found</h2>
            <p>There is no page at <code>{location.pathname}</code></p>
        </>
    )
}

export default NotFound