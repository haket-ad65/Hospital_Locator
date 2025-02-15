import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header style={headerStyle}>
            <h1>Hospital Locater</h1>
            <nav>
                <ul style={navStyle}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                    <Link to="/logout">logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
const headerStyle ={
        padding:'10px',
        backgroundcolor: '#f8f9fa',
        textalign:'center',
        boxshadow: '0px 4px 8px rgba(0,0,0,0.1)',
};

const navStyle={
    listStyleType:'none',
    display:'flex',
    justifyContent:'center',
    gap:'15px',
};

export default Header;