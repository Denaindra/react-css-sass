import React from 'react';
import '../Styles/Navigation.scss'

function Navigation(props) {
    return (
        <div>
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a className='contact' href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    );
}

export default Navigation;