import React, { Component } from 'react';
import './ForumAnswers.css';

import { ListGroup } from 'reactstrap';
import ForumAnswer from './ForumAnswer/ForumAnswer';
import ForumActions from '../../actions/ForumActions';

class ForumAnswers extends Component {

	handleMarkCorrect(id, answer) {
		// abstract out dispatcher
		ForumActions.markAnswerCorrect(id);
	}
	
	render() {
		return (
			<ListGroup className="ForumAnswers">
				{this.props.allAnswers ? this.props.allAnswers.map((ans, idx) => (
					<ForumAnswer key={idx} id={idx} answer={ans}
						onMarkCorrect={this.handleMarkCorrect} />
				)) : null}
			</ListGroup>
		);
	}
}

export default ForumAnswers;