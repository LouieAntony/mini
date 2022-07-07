import React, { Component } from 'react';
import _ from 'lodash'
import { Message, Segment, Grid, Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react';

import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

import web3 from '../../../ethereum/web3';
import contract from '../../../ethereum/contract';

import 'semantic-ui-css/semantic.min.css';

const cards = [
    {
        avatar: `url(${"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"})`,

        description: 'Add Doctor',
    },
    {
        avatar: '/images/avatar/large/matthew.png',

        description: 'Add patient',
    },
    {
        avatar: '/images/avatar/large/molly.png',

        description: 'Assign',
    },
]

class AdminShow extends Component {
    state = { loading: false }

    handleLoadingClick = () => {
        this.setState({ loading: true })

        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }
    render() {
        // const { loading } = this.state
        return (
            <div style={{
                width: 1600,
                height: 750,
                display: 'inline-block',
                // opacity: 0.6,
                backgroundImage: `url(${"https://wallpaper.dog/large/20499790.jpg"})`,
                backgroundSize: 'cover',
            }}>
                <Layout>
                    {/* <>
                    <Card.Group doubling itemsPerRow={3} stackable>
                        {_.map(cards, (card) => (
                            <Card key={card.header}>
                                {loading ? (
                                    <Placeholder>
                                        <Placeholder.Image square />
                                    </Placeholder>
                                ) : (
                                    <Image src={card.avatar} />
                                )}

                                <Card.Content>
                                    {loading ? (
                                        <Placeholder>
                                            <Placeholder.Header>
                                                <Placeholder.Line length='very short' />
                                                <Placeholder.Line length='medium' />
                                            </Placeholder.Header>
                                            <Placeholder.Paragraph>
                                                <Placeholder.Line length='short' />
                                            </Placeholder.Paragraph>
                                        </Placeholder>
                                    ) : (
                                        <>
                                            <Card.Header>{card.header}</Card.Header>
                                            <Card.Meta>{card.date}</Card.Meta>
                                            <Card.Description>{card.description}</Card.Description>
                                        </>
                                    )}
                                </Card.Content>

                                <Card.Content extra>
                                    <Button disabled={loading} primary>
                                        Add
                                    </Button>

                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                </> */}
                    <div class="ui three doubling stackable cards">
                        <div class="ui card">
                            <div class="image">
                                <div class="ui placeholder">
                                    <div class="square image" style={{
                                        backgroundImage: `url(${"https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg"})`,
                                        backgroundSize: 'cover'
                                    }}></div>
                                </div>
                            </div>
                            <div class="content" style={{
                                textAlign: 'center'
                            }}>
                                <p>Add a new Doctor</p>
                            </div>
                            <div class="extra content" align='center'>
                                <Link route='/users/admin/doctors/new'>
                                    <a>
                                        <Button>
                                            Add doctor
                                        </Button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div class="ui card">
                            <div class="image">
                                <div class="ui placeholder">
                                    <div class="square image" style={{
                                        backgroundImage: `url(${"https://www.lowcostlifecover.ie/wp-content/uploads/2021/04/Low-Cost-life-Cover.ie-Sick.jpg"})`,
                                        backgroundSize: 'cover'
                                    }}></div>
                                </div>
                            </div>
                            <div class="content" style={{
                                textAlign: 'center'
                            }}>
                                <p>Add a new patient</p>
                            </div>
                            <div class="extra content" align='center'>
                                <Link route='/users/admin/patients/new'>
                                    <a>
                                        <Button>
                                            Add patient
                                        </Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div class="ui card">
                            <div class="image">
                                <div class="ui placeholder">
                                    <div class="square image" style={{
                                        backgroundImage: `url(${"https://www.kindpng.com/picc/m/347-3474640_initial-image-doctors-and-patients-transparent-hd-png.png"})`,
                                        backgroundSize: 'cover'
                                    }}></div>
                                </div>
                            </div>
                            <div class="content" style={{
                                textAlign: 'center'
                            }}>
                                <p>Assign a doctor to a patient</p>
                            </div>
                            <div class="extra content" align='center'>
                                <Link route='/users/admin/assign'>
                                    <a>
                                        <Button>
                                            Assign
                                        </Button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <Segment>
                    <Grid columns={3} stackable>
                        <Grid.Column textAlign="left">

                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Link route='/users/admin/patients/new'>
                                <a>
                                    <Button>
                                        Add patient
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                            <Link route='/users/admin/assign'>
                                <a>
                                    <Button>
                                        Assign
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid>
                </Segment> */}



                </Layout>
            </div>
        );
    }
}

export default AdminShow;