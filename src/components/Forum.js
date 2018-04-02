import React, { Component } from 'react';
import './Forum.css';

import { Container, Row, Col } from 'reactstrap';

import PeopleSquare from './PeopleSquare/PeopleSquare';
import ForumQuestion from './ForumQuestion/ForumQuestion';
import ForumAnswers from './ForumAnswers/ForumAnswers';
import ForumAddAnswerBox from './ForumAddAnswerBox/ForumAddAnswerBox';
import EventEmitter from '../Flux/eventEmitter';
import ForumDispatcher from '../Flux/ForumDispatcher';

class Forum extends Component {
    // constructor() {
    //     super();
    //     state : {
    //         allAnswers : [
    //             {body: 'a'},
    //             {body: 'b'},
    //             {body: 'c'},
    //         ]
    //     };
    // }
    state = {
        allAnswers : [
            {body: 'a'},
            {body: 'b'},
            {body: 'c'},
        ]
    };

    componentWillMount() {         
        fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(res => {
            let people = res.results;
            this.setState({ people });
        })
    }
    componentDidMount() {
        let event = new EventEmitter();
        event.emit('WILL_MOUNT');
    }

    // Works... Why?
    handleAddAnswer = (e) => {
        let arr = this.state.allAnswers;
        arr.push({'body':e.body});
        this.setState({
            allAnswers: arr
        });
        console.log('Forum.js call dispatch on handleAnswer method')
        ForumDispatcher.dispatch({
            actionType : 'FORUM_ANSWER_ADDED',
            newAnswer : e.body
        });
    }

    render() {
        return (
            <div className="Forum">
                <Container>
                    <Row>
                        <Col className="p-3 bg-secondary text-white">
                            <p>SWAPI names:</p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-between">
                        {this.state.people ? this.state.people.map( (peep, idx) => (
                        <PeopleSquare key={idx} person={peep.name} />
                        ) ) : null }
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs="12">
                            <ForumQuestion />
                            <ForumAnswers allAnswers={this.state.allAnswers} />
                            <h4>Add an answer</h4>
                            <ForumAddAnswerBox onAddAnswer={this.handleAddAnswer} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Forum;