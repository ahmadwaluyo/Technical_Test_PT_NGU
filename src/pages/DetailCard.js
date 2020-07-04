import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCard } from '../store/actions';
import Navbar from '../components/Navbar';
import { Table, Pagination, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';

export default function DetailCard() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

    useEffect(() => {
        dispatch(fetchCard())
    }, [dispatch])


    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }

    if (cards) {
        let names = [];
        cards.map(el => {
            el.members.map(e =>
                names.push(e.name)
            )
        })

        return (
          <>
            <Navbar />
            <div className="search">
              <Form inline>
                  <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                  <Button type="submit">Submit</Button>
              </Form>
          </div>
            <div className="d-flex justify-content-center">
              <Table striped bordered hover size="sm" className="table">
                  <thead className="bg-light" style={{ color: "#000000"}}>
                      <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Participant</th>
                      <th>Note</th>
                      </tr>
                  </thead>
                  {
                      cards.map((el, index) =>
                        <tbody>
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.event_title}</td>
                                <td>{el.location}</td>
                                <td>{el.date}</td>
                                <td>{el.members.map(e => 
                                e.name
                                )}</td>
                                <td>{el.note}</td>
                            </tr>
                        </tbody>
                    )
                  }
                  </Table>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                      <Pagination size="lg">{items}</Pagination>
                  </div>
              </>
          )
    }
}
