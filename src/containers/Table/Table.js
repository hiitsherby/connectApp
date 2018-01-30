import React, { Component } from 'react';
import {Navbar, NavItem, Nav, Col, Button, Grid, Row, Panel, Image, DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap';
import Header from '../../components/UI/Header/Header.js';

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
          }
        },
      ] 
    }
    render(){
      // map each answer to anwer panel
      let questions = [], answers = [];
      this.state.questions.map(question => {
        console.log('question.answers', question.answers);
        for (let item in question.answers){
          
          answers.push(
              <Panel bsStyle="default">
                <Panel.Heading>{item}</Panel.Heading>
                <Panel.Body>{question.answers[item]}</Panel.Body>
              </Panel>          
            );
          }
      });
      


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
                          </Panel.Body>
                        </Panel>
                        
                        {answers}
                        
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