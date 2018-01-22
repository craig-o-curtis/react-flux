import React from 'react';
import './PeopleSquare.css';
import { Col } from 'reactstrap';


const PeopleSquare = (props) => {
    return (
        <Col xs="12" sm="6" md="3" className="p-3 bg-primary text-white">
            {props.person}
        </Col>
    );

}

export default PeopleSquare;