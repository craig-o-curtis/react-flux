import React from 'react';
import './ForumAnswers.css';

import { ListGroup } from 'reactstrap';
import ForumAnswer from './ForumAnswer/ForumAnswer';

const ForumAnswers = (props) => {

    // VIDEO SYNTAX \/ \/ \/ \/
    // let allAnswers = props.allAnswers;
    // let answers = [];

    // for (let key in allAnswers) {
    //     answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]} /> );
    // }

    // return (
    //     <div className="ForumAnswers">
    //         { answers ? answers : null }
    //     </div>
    // );
    // VIDEO SYNTAX /\ /\ /\ /\

    return (
        <ListGroup className="ForumAnswers">
            { props.allAnswers ? props.allAnswers.map( (ans, idx) => (
                <ForumAnswer key={idx} id={idx} answer={ans} />
            ) ) : null }
        </ListGroup>
    );




}

export default ForumAnswers;