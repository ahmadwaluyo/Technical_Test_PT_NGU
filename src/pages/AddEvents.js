import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postEvent } from '../store/actions';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { storage } from '../components/FirebaseStorage';
import '../App.css';

export default function AddEvent() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [participant, setParticipant] = useState([]);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    // const [image_event, setImageEvent] = useState('');

    const dispatch = useDispatch();
    
    const onHandleSubmit = () => {
        const data = {
            title,
            location,
            members : participant,
            date,
            note,
            // image_event
        }
        dispatch(postEvent(data))
    }
 
    async function uploadImage(uri) {
        // Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
        // console.disableYellowBox = true
        // //Get image name
        // let imageName = uri.split('/')
        // imageName = imageName[imageName.length - 1]
    
        // const blob = await new Promise((resolve, reject) => {
        //   const xhr = new XMLHttpRequest()
        //   xhr.onload = function() {
        //     resolve(xhr.response)
        //   }
        //   xhr.onerror = function(e) {
        //     console.log(e)
        //     reject(new TypeError('Network request failed'))
        //   }
        //   xhr.responseType = 'blob'
        //   xhr.open('GET', uri, true)
        //   xhr.send(null)
        // })
    
        // const ref = storage.ref('/mitra/business').child(imageName)
        // const snapshot = await ref.put(blob)
        // // We're done with the blob, close and release it
        // blob.close()
    
        // const url =  await snapshot.ref.getDownloadURL()
        // // dispatch(setInvestor({ photo_profile: url }))
        // setImageEvent(url)
        // console.log("URL", url)
        // return url
      }

  return (
    <>
      <Navbar />
      <Container className="d-flex align-item-center">
        <Row className="event">
            <Col sm={7} style={{ backgroundColor: '#eaeaea'}}>
            <Form onSubmit={onHandleSubmit}>
                <h2 className="mt-3">+ Add Event</h2>
                <Row className="mt-5">
                    <Col>
                    <Form.Control placeholder="Title" onChange={(el) => setTitle(el.target.value)} required />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Location" onChange={(el) => setLocation(el.target.value)} required/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <Form.Control placeholder="Participant" onChange={(el) => setParticipant(el.target.value)} required/>
                    </Col>
                    <Col>
                    <Form.Control placeholder="Date" type="date" onChange={(el) => setDate(el.target.value)} required />
                    </Col>
                </Row>
                <Form.Group className="mt-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Control placeholder="Note" as="textarea" rows="3" onChange={(el) => setNote(el.target.value)} required />
                </Form.Group>
                <Form.Group className="mt-5">
                    <Form.File id="exampleFormControlFile1" label="Upload Picture" onChange={(el) => uploadImage(el.target.value)} required />
                </Form.Group>
                <Button type="submit" className="mt-4" variant="outline-primary">Submit</Button>{' '}
            </Form>
            </Col>
            <Col sm={5} style={{ backgroundColor: '#ffffff'}}>
                <img width="580px" src="https://i.ibb.co/wQQB36S/Pngtree-modern-flat-design-concept-of-5332904.jpg" alt="Pngtree-modern-flat-design-concept-of-5332904" border="0" />
            </Col>
        </Row>
      </Container>
    </>
  );
}
