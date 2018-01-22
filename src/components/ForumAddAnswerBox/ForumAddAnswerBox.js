import React from 'react';
import './ForumAddAnswerBox.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const ForumAddAnswerBox = (props) => {
    return (
        <div className="ForumAddAnswerBox">
            <InputGroup>
                <Input />
                <InputGroupAddon addontype="append">
                    <Button color="primary" onClick={props.clicked}>Add Answer</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}

export default ForumAddAnswerBox;