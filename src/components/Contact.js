import React from "react";
import "../styles.css";

function Contact() {
    return (
        <div className="contact">
            <h3>Contact Me</h3>
            <form>
                <input type="text" placeholder="Your Name"></input>
                <input type="email" placeholder="Your Email"></input>
                <textarea></textarea>
            </form>
        </div>
    )
}

export default Contact