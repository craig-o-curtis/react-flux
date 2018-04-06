import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button, Container, Row, Col } from 'reactstrap';

import classNames from 'classnames';
import './ForumAnswer.css';

const ForumAnswer = (props) => {
	console.log(props)
	return (
		<ListGroupItem className="btn btn-outline-light ForumAnswer">
			<Container>
				<Row>
					<Col xs="6" className="whitespace">
						{props.answer.body ? props.answer.body : null}
					</Col>

					<Col xs="6">
						<Button color="link"
							onClick={() => props.onMarkCorrect(props.id, props.answer)}>
							<span className={ classNames( { 'btn': true, 'btn-success': props.answer.correct } ) }>
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