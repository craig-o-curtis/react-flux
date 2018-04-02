import React, { Component } from 'react';
import './ForumAnswers.css';

import { ListGroup } from 'reactstrap';
import ForumAnswer from './ForumAnswer/ForumAnswer';
import ForumDispatcher from '../../Flux/ForumDispatcher';

class ForumAnswers extends Component {

    handleMarkCorrect(id) {
        console.log('id')
        console.log(id)
        
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id,
        });
        // TODO - actually need to pass the id to the dispatcher. currently an '$event'
    }

    render() {
        return (
            <ListGroup className="ForumAnswers">
                { this.props.allAnswers ? this.props.allAnswers.map( (ans, idx) => (
                    <ForumAnswer key={idx} id={idx} answer={ans} onMarkCorrect={this.handleMarkCorrect} />
                ) ) : null }
            </ListGroup>
        );
    }
}

export default ForumAnswers;