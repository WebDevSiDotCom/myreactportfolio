import React from "react";
import "../styles.css";


function Main() {
    return (
        <main>
            <h2>My Projects</h2>
            <div className="project-card">
                <h3 className="project-card-title">Project Title</h3>
                <p className="project-desc">Project description</p>
            </div>
        </main>
    )
}

export default Main