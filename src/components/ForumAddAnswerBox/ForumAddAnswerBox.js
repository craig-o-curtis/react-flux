import React, {Component} from 'react';
import './ForumAddAnswerBox.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

/**
 * Props:
 *  onAddAnswer: f
 */ 
class ForumAddAnswerBox extends Component {
    state = {
        input: ''
    }

    updateInput = (e) => {
        this.setState({input: e.target.value});
    }

    addAnswer = () => {
        // send state.input up to parent attr to handle fn
        this.props.onAddAnswer( {'body':this.state.input} );
        // reset state.input
        this.setState({input: ''});
    }

    render() {
        return (
            <div className="ForumAddAnswerBox">
                <InputGroup>
                    <Input onChange={this.updateInput} value={this.state.input} />
                    <InputGroupAddon addontype="append">
                        <Button color="primary" onClick={this.addAnswer}>Add Answer</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }

}

export default ForumAddAnswerBox;