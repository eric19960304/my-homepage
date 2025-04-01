import { Link, useLocation } from 'react-router-dom';
import '../main.css';
import '../theme.css';

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;
    const activeClassName = "w3-bar-item w3-button w3-theme-l1";
    const inactiveClassName = "w3-bar-item w3-button w3-hover-white";

    return (
        <>
            <div className="w3-top">
                <div className="w3-bar w3-theme w3-top w3-left-align w3-large myNavBar">
                    <Link
                        to="/"
                        className={path === '/' ? activeClassName : inactiveClassName}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/aboutme"
                        className={path === '/aboutme' ? activeClassName : inactiveClassName }
                    >
                        About Me
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar; 