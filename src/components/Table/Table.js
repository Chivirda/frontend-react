import React, { Component } from 'react'
import './Table.css'
import legalentity from '../../legalentity.json'

class Table extends Component {
    state = {
        entities: []
    }

    async componentDidMount() {
        try {
            console.log(legalentity);
            
            const entities = []

            for (let entity of legalentity) {
                entities.push({
                    id: entity.legalEntityID,
                    name: entity.legalEntityName,
                    address: entity.address1 + ' ' + entity.address2,
                    city: entity.city,
                    country: entity.country
                })
            }

            this.setState({
                entities
            })
            
        } catch (e) {
            console.log(e)
        }

        
    }

    renderTable() {

        

        return this.state.entities.map(entity => {
            return (
                <tr
                    key={entity.id}
                    className="row"
                >
                    <td>{entity.name}</td>
                    <td>{entity.address}</td>
                    <td>{entity.city}</td>
                    <td>{entity.country}</td>
                </tr>
            )
        })

        
        
    }

    insertCheck() {
        const tr = document.querySelectorAll('.row')
        for (let row of tr) {
            return row.insertAdjacentElement('afterbegin', '<i class="fa fa-check" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;&nbsp;')
        }
    }
    
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td id="firstColumnName">Legal Entity</td>
                        <td>Street</td>
                        <td>City</td>
                        <td>Country</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                    {this.insertCheck()}
                </tbody>
            </table>
        )
    }
}

export default Table
