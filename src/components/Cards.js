import React from 'react';
import { Card, ListGroupItem, Row, Col, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../App.css';

export default function CardsComponent (props) {
    const { data } = props;
    return (
        <>
            <Link style={{ textDecoration: 'none', color: '#000000'}} to="/:id">
            <Card className="card">
                <ListGroupItem />
                <Card.Img style={{ height: '15rem' }} variant="top" src={`${data.image_event}`}  />
                <ListGroupItem>
                    <Row>
                        <Col sm={2}>
                            <FaMapMarkerAlt style={{ color: "red" }}/>
                        </Col>
                        <Col sm={10} style={{ fontSize: 20, fontWeight: "bold" }}>
                            {data.location}
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <h3>{data.event_title}</h3>
                    <span>{data.date}</span>
                </ListGroupItem>
                <Card.Header style={{ backgroundColor: "#ececec", justifyContent: "center", aliginItem: "center"}}>
                    {
                        data.members.map(el => 
                            <Row>
                                <Col xs={2}>
                                    <Image style={{ width: 30 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    {el.name}
                                </Col>
                            </Row>
                        )
                    }
                </Card.Header>
                <Card.Body>
                    <Card.Title>Note :</Card.Title>
                    <Card.Text>
                        {data.note}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </>
    )
}