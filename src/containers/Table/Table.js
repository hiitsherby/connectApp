import React, { Component } from 'react';
import {Navbar, NavItem, Nav, Col, Button, Grid, Row, Panel, Image, DropdownButton, Breadcrumb, MenuItem, ButtonGroup, ListGroupItem, ListGroup} from 'react-bootstrap';
import Header from '../../components/UI/Header/Header';
import HelpDesk from '../../components/HelpDesk/HelpDesk';
import SideBar from '../../components/SideBar/SideBar';

import './Table.css';

class Table extends Component {
    state = {
      questions:[
        {
          question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 
          answers: {
            A: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
            B: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            C: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            D: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          },
          clicked: true
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 
          answers: {
            A: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
            B: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            C: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            D: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          },
          clicked: false
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 
          answers: {
            A: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
            B: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            C: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            D: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
          },
          clicked: false
        },
      ],
      active: 0,
    }
    
    toggle(item){
      if (this.state.active === item) {
        this.setState({active : null})
      } else {
        this.setState({active : item})
      }
    }
    
    isActive(item) {
      if (this.state.active === item) {
        return "Panel:hover";
      }
      return "Panel";
    }
    
    render(){
      
      let questions = [], answers = [];
      this.state.questions.map((question, index) => {
        //map question to question panel
        questions.push(
            <Panel
              key={index}
              style={{display: question.clicked? 'block':'none'}}
            >
              <Panel.Body>
                <p className="questionHeading">
                  Question {index+1} of {this.state.questions.length}
                </p>
                {question.question}
              </Panel.Body>
            </Panel>          
          );
        // map each answer to anwer panel
        for (let item in question.answers){
          answers.push(
              <Panel 
                key={item}
                className="Panel"
                style={{display: question.clicked? 'block':'none'}}
              >
                <p className="panelHeading">
                  {item}
                </p>
                <Panel.Body>
                  {question.answers[item]}
                </Panel.Body>
              </Panel>    
            );
          }
      });
      


        return (
            <div>
                <Header />
                <Grid>
                <Row>
                  <Col sm={3} md={3} lg={3}>
                    <SideBar />
                  </Col>
                  <Col sm={9} md={9} lg={9}>
                  
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <div className="div">
                          {questions}
                          {answers}
                        </div>
                        <div className="div">
                         <Button className="button">Check Answer</Button>
                        </div>
                        <div className="div">
                          <HelpDesk />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                </Grid>
            </div>
        );
    }
}

export default Table;