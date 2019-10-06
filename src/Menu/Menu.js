import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <div className="Menu">
            <Link to="/" className="Logo"><div className="Logo-Text">Ryan Caigoy</div></Link>

            <div className="Menu-Navigation">
                <Link to="/" className="Menu-Link">Home</Link>
                <a href="Interactive-Portfolio">
                    Interactive Portfolio
                </a>
            </div>
        </div>
    );
}

export default Menu;
