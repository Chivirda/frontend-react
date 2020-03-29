import React, { Component } from 'react'
import './MainHeading.css'

class MainHeading extends Component {
    render() {
        return (
            <h1 className="content__head">{this.props.value}</h1>    
        )
    }
}

export default MainHeading
