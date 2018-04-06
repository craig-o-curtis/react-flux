import React, { Component } from 'react';
import './Forum.css';

import { Container, Row, Col } from 'reactstrap';

import PeopleSquare from './PeopleSquare/PeopleSquare';
import ForumQuestion from './ForumQuestion/ForumQuestion';
import ForumAnswers from './ForumAnswers/ForumAnswers';
import ForumAddAnswerBox from './ForumAddAnswerBox/ForumAddAnswerBox';

import ForumActions from '../actions/ForumActions';
import ForumStore from '../Stores/ForumStore';

class Forum extends Component {
	constructor(props) {
		super(props);

		this.state = {
			allAnswers: ForumStore.getAnswers()
		};
	}

	componentWillMount() {
		fetch('https://swapi.co/api/people/')
			.then(res => res.json())
			.then(res => {
				let people = res.results;
				this.setState({ people });
			})
	}

	componentDidMount() {
		ForumStore.addChangeListener( this._onChange );
		// ForumStore.on('change', this._onChange); // or directly use .on method
	}

	componentWillUnmount() {
		ForumStore.removeListener( this._onChange );
	}

	// added on componentDidMount
	// requres using arrow functions to work with this
	_onChange = () => {
		this.setState({
			allAnswers: ForumStore.getAnswers()
		});
	}

	handleAddAnswer = (e) => {
		// abstract out dispatcher
		ForumActions.addNewAnswer(e.body);
	}

	render() {
		return (
			<div className="Forum">
				<Container>
					<Row>
						<Col className="p-3 bg-secondary text-white">
							<p>SWAPI names:</p>
						</Col>
					</Row>
					<Row className="d-flex justify-content-between">
						{this.state.people ? this.state.people.map((peep, idx) => (
							<PeopleSquare key={idx} person={peep.name} />
						)) : null}
					</Row>
				</Container>

				<Container>
					<Row>
						<Col xs="12">
							<ForumQuestion />
							<ForumAnswers allAnswers={this.state.allAnswers} />
							<h4>Add an answer</h4>
							<ForumAddAnswerBox onAddAnswer={this.handleAddAnswer} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Forum;