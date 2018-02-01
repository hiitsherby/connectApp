import React, { Component } from 'react';
import {Col, Button, Row, ListGroupItem, ListGroup} from 'react-bootstrap';
import './HelpDesk.css';

class HelpDesk extends Component{
  // example topics in helpdesk
    state = {
      topics: [
        {
          header: "Terminology and predicting reactions",
          description: "Mini-tutorial",
          link: "#"
        },
        {
          header: "Fuel cells and their advantages and disadvantages",
          description: "Mini-tutorial",
          link: "#"
        },
        {
          header: "The hydrogen fuel cell",
          description: "Mini-tutorial",
          link: "#"
        }
      ]
    }
      
    render(){
      // map topics to helpdesk
        let topics = [];
        this.state.topics.map((topic, index) => {
          topics.push(
            <ListGroupItem 
              key={index}
              href={topic.link}
              className="topic"
            >
              <Row>
                <Col sm={10} md={10} lg={10}>
                  <h5><b>{topic.header}</b></h5>
                  <h6>{topic.description}</h6>
                </Col>
                <Col sm={2} md={2} lg={2}>
                  <i className="icon fa fa-chevron-right" aria-hidden="true"></i>
                </Col>
              </Row>
            </ListGroupItem>   
          );
        });
        return(
        <div>
          <p>
            Need Help? Use the Knowledge Base to access detailed hints, tutorials, and question analyses.
          </p>
          <ListGroup className="listGroup">
            <ListGroupItem className="noneHover">
              <Button className="button">Knowledge Base</Button>
            </ListGroupItem>
            {topics}
          </ListGroup>
        </div>
        );
    }
}

export default HelpDesk;