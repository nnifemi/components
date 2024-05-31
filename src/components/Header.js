import React from 'react';

function Header() {
    return (
        <header>
            <h1>Fashion<span className="green">Central</span></h1>
            <nav className="nav-container">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;