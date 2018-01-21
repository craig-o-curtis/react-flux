import React, {Component} from 'react';
import './PeopleSquare.css';
import { Container, Row, Col } from 'reactstrap';


const PeopleSquare = (props) => {
    return (
        <Col xs="12" sm="6" md="3" className="p-3 bg-primary text-white">
            <div>{props.person}</div>
        </Col>
    );

}

export default PeopleSquare;