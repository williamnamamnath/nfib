import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(!menuClicked)
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow rounded-3 rounded-lg-pill mx-auto" style={{backgroundColor: '#245BDE', maxWidth: '95%', top: '1rem' }}>
            <div className="container-fluid">
                <Link to="/" className="title">NFIB Clinic</Link>
                <div className="navbar-toggler border-0" style={{ cursor: 'pointer' }} onClick={handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </div>
                
                <div className={`collapse navbar-collapse ${menuClicked ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item fw-bold text-center">
                            <NavLink to="/about-nfib" className="nav-link py-3 py-lg-2" onClick={() => setMenuClicked(false)}>What is NFIB?</NavLink>
                        </li>
                        <li className="nav-item fw-bold text-center">
                            <NavLink to="/projects" className="nav-link py-3 py-lg-2" onClick={() => setMenuClicked(false)}>Our Projects</NavLink>
                        </li>
                        <li className="nav-item fw-bold text-center">
                            <NavLink to="/news-and-events" className="nav-link py-3 py-lg-2" onClick={() => setMenuClicked(false)}>News and Events</NavLink>
                        </li>
                        <li className="nav-item fw-bold text-center">
                            <NavLink to="/nf1-team" className="nav-link py-3 py-lg-2" onClick={() => setMenuClicked(false)}>Our Team</NavLink>
                        </li>
                        <li className="nav-item fw-bold text-center">
                            <NavLink to="/contact" className="nav-link py-3 py-lg-2" onClick={() => setMenuClicked(false)}>Contact and Resources</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}; 

export default Navbar;