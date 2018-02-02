import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import './ForumAnswer.css';


const ForumAnswer = (props) => {

    return (
        <ListGroupItem className="btn btn-primary ForumAnswer">
            {props.answer.body ? props.answer.body : null}
        </ListGroupItem>
    );

}

export default ForumAnswer;

ForumAnswer.propTypes = {
    answer : PropTypes.object.isRequired
};