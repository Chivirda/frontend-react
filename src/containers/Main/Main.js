import React, { Component } from 'react'
import './Main.css'
import Navigations from '../../components/Navigations/Navigations'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'

export class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main-wrapper">
                    <Navigations />
                    <MainContent />
                </div>
            </div>
        )
    }
}

export default Main
