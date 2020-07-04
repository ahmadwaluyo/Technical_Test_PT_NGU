import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import { fetchCard } from '../store/actions';
import { Spinner } from 'react-bootstrap';
import '../App.css';

export default function Dashboard() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCard())
  }, [dispatch])

  if (cards) {
    return (
      <>
      <Navbar />
      <div className="d-flex flex-row flex-wrap justify justify-content-center">
        {
          cards.map(el => 
            <Cards key={el.id} data={el} />)
        }
      </div>
      </>
    )
  } else {
    return (
      <Spinner animation="grow" />
    )
  }
}
