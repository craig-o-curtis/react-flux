import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import './ForumAnswer.css';


const ForumAnswer = (props) => {

    return (
        <ListGroupItem className="ForumAnswer">
            {props.answer.body ? props.answer.body : null}
        </ListGroupItem>
    );

}

export default ForumAnswer;

ForumAnswer.propTypes = {
    answer : PropTypes.object.isRequired
};