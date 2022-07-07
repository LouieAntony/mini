import React, { Component } from 'react';
import { Segment, Header, Button, Menu, Label, Sticky, Grid, Container } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link, Router } from '../routes';
import { Card, Message } from 'semantic-ui-react';

import contract from '../ethereum/contract';
import web3 from '../ethereum/web3';

import 'semantic-ui-css/semantic.min.css';

class LandingPage extends Component {
    state =
        {
            errorMessage: ''
        };

    onButtonPressed = async (evt) => {
        this.setState({ errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();

            const adminAddress = await contract.methods.admin().call();

            const isAdmin = accounts[0] == adminAddress;

            const isPatient = await contract.methods.isPatient(accounts[0]).call();
            const isDoctor = await contract.methods.isDoctor(accounts[0]).call();

            if (isAdmin) {
                Router.pushRoute('/users/admin');
            }
            else if (isPatient) {
                Router.pushRoute(`/users/patients/${accounts[0]}`);
            }
            else if (isDoctor) {
                Router.pushRoute(`/users/doctors/${accounts[0]}`);
            }
            else {
                this.setState({ errorMessage: "You are not a registered user" })
            }
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
        }
    }

    render() {
        return (
            <div style={{
                width: 1600,
                height: 750,
                display: 'inline-block',
                // opacity: 0.6,
                backgroundImage: `url(${"https://wallpaper.dog/large/20499790.jpg"})`,
                backgroundSize: 'cover',
            }}>

                <Layout align='center'>
                    <Segment class='seg'>
                        <Header as='h3' textAlign='center' font-family='Helvetica Neue' font-size='30'>
                            An  electronic  record  of  health-related  information  on  an  individual  that  can  be  created,  gathered,  managed,  and  consulted  by  authorized  clinicians  and   staff  within  one  health  care  organization.

                        </Header>
                    </Segment>
                    {/* <Segment> */}
                    <Grid>
                        <Grid.Column textAlign="center">
                            <Button primary
                                onClick={this.onButtonPressed}>Get started</Button>
                        </Grid.Column>
                    </Grid>
                    {/* </Segment> */}
                    <Message
                        hidden={!this.state.errorMessage}
                        error
                        header="Error!"
                        content={this.state.errorMessage}
                    />

                    <div>
                        {this.props.isAdmin}
                    </div>
                </Layout>
            </div>
        );
    }
}

export default LandingPage;