import '../App.css';
import React, { Component } from 'react';
import { Container, Row, Column } from 'reactstrap';
import PartnerDashboard from './dashboard/PartnerDashboard';

import './Dashboard.css';
import { Flex, Layout, Fixed } from 'react-layout-pane';



export class Dashboard extends Component {

    render = () => (

    <Layout type="column">
        <Fixed className="header">
            Fixed Header
        </Fixed>
        <Flex>
            <Layout type="row">
                <Fixed className="sidebar">
                    <Layout type="column">
                        <Fixed>
                            Top Left
                        </Fixed>
                        <Flex>
                        </Flex>
                        <Fixed>
                            Bottom Left
                        </Fixed>
                    </Layout>
                </Fixed>
                <Flex className="content">
                    <PartnerDashboard heading="Caretaker" />
                </Flex>
                <Fixed className="sidebar">
                    <Layout type="column">
                        <Fixed>
                            Top Right
                        </Fixed>
                        <Flex>
                        </Flex>
                        <Fixed>
                            Bottom Right
                        </Fixed>
                    </Layout>
                </Fixed>
            </Layout>
        </Flex>
        <Fixed className="header">
            Fixed Footer
        </Fixed>
    </Layout>
    )
}