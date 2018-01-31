import React, { Component } from 'react';
import {Col, Button, Grid, Row, Panel} from 'react-bootstrap';
import Header from '../../components/UI/Header/Header';
import HelpDesk from '../../components/HelpDesk/HelpDesk';
import SideBar from '../../components/SideBar/SideBar';

import './Table.css';

class Table extends Component {
    constructor(props){
      super(props);
      this.state = {
        // 3 example questions
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
          {
            question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 
            answers: {
              A: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              B: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
              C: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              D: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            }
          },
          {
            question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 
            answers: {
              A: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus',
              B: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              C: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.',
              D: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            }
          },
        ],
        active: 1,
        answer: 0
      }
    }
 
    // which question is active
    isClicked(i){
      this.setState({active: i});
    }
    // which answer is clicked
    handleClickAnswer(e,i){
      e.preventDefault();
      this.setState({answer: i});
      console.log(this.state.answer);
    }
    
    
    render(){
      let questions = [], answers = [];
      this.state.questions.map((question, index) => {
        // map questions to question panel
        questions.push(
            <Panel
              key={index}
              style={{display: this.state.active === index+1? 'block':'none'}}
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
                key={index+'_'+item}
                className={this.state.answer === index+'_'+item? "PanelActive":"Panel"}
                style={{display: this.state.active === index+1? 'block':'none'}}
                onClick={e=>this.handleClickAnswer(e,index+'_'+item)}
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
                    <SideBar 
                      isClicked={this.isClicked.bind(this)}
                      {...this.state}
                    />
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