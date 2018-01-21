import React from 'react';
import './ForumAddAnswerBox.css';

const ForumAddAnswerBox = (props) => {
    return (
        <div className="ForumAddAnswerBox">
            <textarea id="addAnswer"
                className="col-md-6 col-xs-8">
            </textarea>

            &nbsp;<input type="button" 
                className="btn btn-primary" value="Add" />
        </div>
    );
}

export default ForumAddAnswerBox;