import React, { Component } from 'react'
import './MainContent.css'
import MainHeading from '../MainHeading/MainHeading'

export class MainContent extends Component {
    render() {
        return (
            <div className="content">
                <MainHeading value="1: Select Legal Entity"/>
            </div>
        )
    }
}

export default MainContent
