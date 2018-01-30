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
                      <a href="#">
                        <img 
                          src="https://pbs.twimg.com/profile_images/875912995389423616/VmUYu0vi_400x400.jpg" 
                          style={{width:50, marginTop: 0}} 
                        />
                        ConnectApp
                      </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Navbar.Text pullRight>
                      <img 
                        src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png" 
                        style={{width:35, marginTop: -7}} 
                      />
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;                        

// <Image className="brandIcon" src="https://pbs.twimg.com/profile_images/875912995389423616/VmUYu0vi_400x400.jpg"/>
