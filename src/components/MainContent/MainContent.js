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
                <Table 
                    onTableClick={this.onTableClickHandler}
                />
                <Button />
            </div>
        )
    }

    onTableClickHandler() {
        const rows = document.querySelectorAll('.row')

        for (let row of rows) {
            row.onclick = function() {
                for (let children of rows) {
                    children.classList.remove('active')
                }
                this.classList.add('active')
            }
        }
    }
}

export default MainContent
