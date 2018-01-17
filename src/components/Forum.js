import React, { Component } from 'react';
import './Forum.css';

import { Container, Row, Col } from 'reactstrap';

class Forum extends Component {
    constructor() {
        super();
    }
    state = {
        test : 1
    };

    componentWillMount() {
        fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(res => {
            let people = res.results;
            this.setState({ people });
        })
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="">
                <Container className="">
                    <Row className="">
                        {this.state.people ? this.state.people.map( (peep, idx) => (    
                        <Col key={idx} xs="12" sm="6" md="3" className="p-3 bg-primary text-white">
                            <div >{peep.name}</div>
                        </Col>
                        ) ) : null }
                    </Row>
                    <Row>
                        <Col className="p-3 bg-secondary text-white">
                            <p>Paragraph</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Forum;