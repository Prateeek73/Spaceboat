import React, { Component } from 'react'
import logo from './raw/logo.png'
import { FaWhatsapp } from 'react-icons/fa';


export class Navbar extends Component {
    render() {
        
        let linksMarkup = this.props.links.map((link, index) => {
            if(index===0)
                return(
                    <li key={index} className="menu__list-item">
                        {<a className="menu__link" href={link.link} target="blank"><FaWhatsapp /> {link.label}</a>}
                    </li>
                )
            else
                return(
                    <li key={index} className="menu__list-item">
                        {<a className="menu__link" href={link.link}>{link.label}</a>}
                    </li>
                )
        });
        return (
            <div>
                <nav className="navbar">
                    <img src={logo} alt="Logo" className="logo"/>
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar

