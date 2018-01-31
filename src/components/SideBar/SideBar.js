import React, { Component } from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import './SideBar.css';

class SideBar extends Component{
    // click on questions on sidebar
    handleClick(e,i){
      e.preventDefault();
      this.props.isClicked(i);
    }

    render(){
      // render question number to side bar
      let questionList = [];
      for (let i = 1; i < this.props.questions.length+1; i++){
        questionList.push(
          <ListGroupItem 
            className={this.props.active===i? "subBar active":"subBar"}
            key={i}
            onClick={e => this.handleClick(e,i)}
          >
            <i className="fa fa-circle fa-fw" aria-hidden="true"></i>
            Question {i}
          </ListGroupItem>      
        );
      }      
      return(
       <ListGroup>
        <ListGroupItem>
          <i className="fa fa-home fa-lg fa-fw" aria-hidden="true"></i>
          Home
        </ListGroupItem>
        <ListGroupItem>
            <i className="fa fa-list-ul fa-lg fa-fw" aria-hidden="true"></i>
            Topics/
            <p className="active">
              Galvanic Chemistry
              <i className="fa fa-chevron-right pull-right icon" aria-hidden="true"></i>
            </p>
        </ListGroupItem>
        <ListGroupItem>
          <p className="active">
            <i className="fa fa-pencil fa-lg fa-fw" aria-hidden="true"></i>
            Practice Quiz
            <i className="fa fa-chevron-down pull-right" aria-hidden="true"></i>
          </p>
        </ListGroupItem>  
        {questionList}
      </ListGroup>
      );
    }
}

export default SideBar;