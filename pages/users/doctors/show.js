import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Input, Form, Message, Table } from 'semantic-ui-react';
import RecordRow from '../../../components/RecordRow';

import 'semantic-ui-css/semantic.min.css';

import { Link, Router } from '../../../routes';

import contract from '../../../ethereum/contract';
import web3 from '../../../ethereum/web3';

export async function getServerSideProps(props)
{
    let recordCount;

    try
    {
        recordCount = await contract.methods.getRecordCount(props.query.doctorAddress).call();
    }
    catch(err)
    {
        console.log(err);
    }

    let records;
    
    if(recordCount)
    {
        const recordNumbersList = await contract.methods.getRecordNumbers(props.query.doctorAddress).call();

        records = await Promise.all
        (
            recordNumbersList.map
            ( 
                (index) => contract.methods.records(index).call()
            )
        );
    }
    else
    {
        records = [];
    }

    return { 
        props : 
        {
            address: props.query.doctorAddress,
            records: JSON.parse(JSON.stringify(records))
        }
    };
}

class DoctorShow extends Component
{
    render()
    {
        const { Header, HeaderCell, Body, Row } = Table;

        const recordRows = this.props.records.map
        (
            (record, index) => 
            {
                return (
                    <RecordRow 
                        key = { index }
                        number = { record.recordNumber }
                        record = { record }
                        routeStart = { `/users/doctors/${this.props.address}/` }
                    />
                );
            }
        );


        return (
            <Layout>
                <Link route = { `/users/doctors/${this.props.address}/records/new` } >
                    <a>
                        <Button primary floated = 'right' style = { { marginBottom: 10 } }>
                            Create record
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell textAlign = 'center'>Number</HeaderCell>
                            <HeaderCell textAlign = 'center'>Doctor</HeaderCell>
                            <HeaderCell textAlign = 'center'>Patient</HeaderCell>
                            <HeaderCell textAlign = 'center'></HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        { recordRows }
                    </Body>
                </Table>

                <div>Found { this.props.recordCount } record(s).</div>
            </Layout>
        );
    }
}

export default DoctorShow;