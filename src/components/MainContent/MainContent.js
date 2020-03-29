import React, { Component } from 'react'
import './MainContent.css'
import MainHeading from '../MainHeading/MainHeading'
import Table from '../Table/Table'
import Button from '../Button/Button'

const firstStepHeading = "1: Select Legal Entity"

class MainContent extends Component {
    render() {
        return (
            <div className="content">
                <MainHeading value={firstStepHeading} />
                <Table />
                <Button />
            </div>
        )
    }
}

export default MainContent
