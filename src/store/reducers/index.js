import { SET_CARDS } from '../actions/index';

const initialStore = {
    cards: []
};

function cards(state = initialStore, action) {
    const { type, payload } = action;

    if (type === SET_CARDS) {
        return { ...state, cards: payload };
    }

    return state;
}

export default cards;