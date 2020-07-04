import axios from "axios";
const url = 'http://localhost:3000'

export const SET_CARDS = 'SET_CARDS';

export const setCard = (data) => {
  return { type: SET_CARDS, payload: data }
}

export const fetchCard = () => {
  return (dispatch) => {
    axios
      .get(`${url}/data`)
      .then(({ data }) => {
        console.log('data', data);
        dispatch(setCard(data))
      })
      .catch((err) => {
          console.log(err);
      })
  }
}

export const postEvent = (dataEvent) => {
    console.log('masuk post');
  return (dispatch) => {
    axios
      .post(`${url}/data`, {
        image_event:" https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80",
        event_title: dataEvent.event_title,
        location: dataEvent.location,
        members: [
          {
            name: dataEvent.name
          }
        ],
        date: dataEvent.date,
        note:dataEvent.note
      })
      .then(({ data }) => {
        console.log('data', data);
      })
      .catch((err) => {
          console.log(err);
      })
  }
}

