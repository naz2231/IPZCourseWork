import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { hostelData } from '../../../../db/database';

/**
* Component that gives information about Hostel
* 
* @returns (
*  <HostelInfo />
* )
*/
class HostelInfo extends Component {
    constructor() {
        super();
        this.state = {
            hostel: undefined,
        }
    }

    componentDidMount() {
        this.setState({  hostel:hostelData });
    }

    render() {

        const { hostel } = this.state;
        return (
            <div>
                <Table unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Hostel #</Table.HeaderCell>
                            <Table.HeaderCell>Hostel head</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {hostel && hostel.map(item => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{item.number}</Table.Cell>
                                    <Table.Cell>{item.head}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default HostelInfo;
