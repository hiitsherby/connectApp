import React, { Component } from 'react';
import './Header.css';
import {Navbar, NavItem, Nav, Col, Button, Table, Grid, Row, Panel, Image} from 'react-bootstrap';


class Header extends Component {
    render(){
        return (
            <div>
                <Navbar>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#home">
                        ConnectApp
                      </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Navbar.Text pullRight>Have a great day!</Navbar.Text>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;                        

// <Image className="brandIcon" src="https://pbs.twimg.com/profile_images/875912995389423616/VmUYu0vi_400x400.jpg"/>
