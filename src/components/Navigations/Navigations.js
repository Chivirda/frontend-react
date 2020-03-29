import React, { Component } from 'react'
import './Navigations.css'

class Navigations extends Component {
    render() {
        return (
            <nav className="navigation">
                <div className="navigation__wrapper">
                    <div className="navigation__item">
                        <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                        <span>Dashboard</span>
                    </div>
                    <div className="navigation__item active">
                        <i className="fa fa-files-o fa-2x" aria-hidden="true"></i>
                        <span>Add Contract</span>
                    </div>
                    <div className="navigation__item">
                        <i className="fa fa-check-square-o fa-2x" aria-hidden="true"></i>
                        <span>Open Tasks</span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigations