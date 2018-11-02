const initialState = [];

export default function data(state = initialState, action) {
    if(action.type === 'FETCH_DATA_SUCCESS'){
        return action.payload;
    }
    if(action.type === 'SET_CARD_IMAGE_SIZE'){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}