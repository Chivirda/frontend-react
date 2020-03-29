import React, { Component } from 'react'
import './Table.css'
import Axios from 'axios'

class Table extends Component {
    state = {
        entities: []
    }

    async componentDidMount() {
        try {
            const legalentity = await Axios.get('https://frontend-9edd3.firebaseio.com/legalentity.json')
            const entities = []

            for (let entity of legalentity.data) {
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
                >
                    <td>{entity.name}</td>
                    <td>{entity.address}</td>
                    <td>{entity.city}</td>
                    <td>{entity.country}</td>
                </tr>
            )
        })
        
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
                </tbody>
            </table>
        )
    }
}

export default Table
