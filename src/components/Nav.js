import React from "react";
import "../styles.css";

function Nav() {
    return (
        <header>
            <h1 className="logo--text">Web Dev Si - Software Engineer</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">My Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav