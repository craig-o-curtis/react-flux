import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button, Container, Row, Col } from 'reactstrap';

import classNames from 'classnames';
import './ForumAnswer.css';

const ForumAnswer = (props) => {
	console.log(props)
	return (
		<ListGroupItem 
			className={ classNames( { 'ForumAnswer': true, 'bg-success text-white txt-white': props.answer.correct } ) }>
			<Container>
				<Row>
					<Col xs="6" className="whitespace">
						{props.answer.body ? props.answer.body : null}
					</Col>
					<Col></Col>
					<Col>
						<Button color={ props.answer.correct ? 'success' : 'light'}
							onClick={() => props.onMarkCorrect(props.id, props.answer)}>
							<span>
								{ props.answer.correct ? '': 'Mark'} Correct
							</span>
						</Button>
					</Col>
				</Row>
			</Container>
		</ListGroupItem>
	);

}

export default ForumAnswer;

ForumAnswer.propTypes = {
	answer: PropTypes.object.isRequired
};