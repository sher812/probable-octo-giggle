import React, { useState } from "react";
import Menuitems from "./Menuitems.js";
import "./Navbar.css";

function Navbar() {
    const [state, setState] = useState(false);

    function handleState() {
        console.log(state);

        setState((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <div className="scopeNav">
            {/* <h1 className="nameTitle"> Seong </h1> */}
            <nav className="navBar">
                <button onClick={handleState}>
                    <i
                        className={state ? "fas fa-align-center" : "fas fa-align-justify"}
                    ></i>
                </button>
                <ul className={state ? "listCollection" : "listCollection active"}>
                    {Menuitems.map((item, index) => {
                        return (
                            <li key={index} className="listNav">
                                <a href={item.url}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
