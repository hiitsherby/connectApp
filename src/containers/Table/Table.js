import React, { Component } from 'react';
import {Navbar, NavItem, Nav, Col, Button, Grid, Row, Panel, Image} from 'react-bootstrap';
import Header from '../../components/UI/Header/Header.js';

class Table extends Component {
    render(){
        return (
            <div>
                <Header />
                <Row>
                  <Col sm={2} md={2} lg={2}>
                  </Col>
                  <Col sm={10} md={10} lg={10}>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default Table;