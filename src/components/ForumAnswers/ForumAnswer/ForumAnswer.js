import React from 'react';
import PropTypes from 'prop-types';

const ForumAnswer = (props) => {

    return (
        <div className="panel panel-default">
            <div className="panel-body">
                {props.answer.body ? props.answer.body : null}
            </div>
        </div>
    );

}

export default ForumAnswer;

ForumAnswer.propTypes = {
    answer : PropTypes.object.isRequired
};