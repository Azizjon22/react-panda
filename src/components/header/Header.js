import React from 'react';
import "./header.css"

function Header(props) {
    return (
        <div className='navbar'>

            <div className='logo'>
                <h2>logo</h2>
            </div>

            <div className='panda'>
                <ul>
                    <li>Panda</li>
                    <li>Panda</li>
                    <li>Panda</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;