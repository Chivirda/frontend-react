import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
            <div className="header__item">
                <i className="fa fa-user header__icon" aria-hidden="true"></i>
                <span>Welcome, Anil Tumati</span>
            </div>
            <div className="header__item">
                <i className="fa fa-lock header__icon" aria-hidden="true"></i>
                <span>Logout</span>
            </div>
        </header>
        )
    }
}

export default Header