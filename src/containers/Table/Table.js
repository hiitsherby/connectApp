import React, { Component } from 'react';
import {Navbar, NavItem, Nav, Col, Button, Grid, Row, Panel, Image, DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap';
import Header from '../../components/UI/Header/Header.js';

class Table extends Component {
    render(){
        return (
            <div>
                <Header />
                <Row>
                  <Col sm={2} md={2} lg={2}>
                    <ButtonGroup vertical block>
                      <Button>Home</Button>
                      <Button>Topics</Button>
                      <Button>Practice Quiz</Button>
                    </ButtonGroup>
                  </Col>
                  <Col sm={10} md={10} lg={10}>
                    <Row>
                      <Col sm={1} md={1} lg={1}></Col>
                      <Col sm={10} md={10} lg={10}>
                        <Panel>
                          <Panel.Heading>Question 3 of 8</Panel.Heading>
                          <Panel.Body>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
                            Nullam dictum felis eu pede 
                          </Panel.Body>
                        </Panel>
                        
                        <Panel bsStyle="default">
                          <Panel.Heading>A</Panel.Heading>
                          <Panel.Body>Panel content</Panel.Body>
                        </Panel>
                      </Col>
                      <Col sm={1} md={1} lg={1}></Col>
                    </Row>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default Table;