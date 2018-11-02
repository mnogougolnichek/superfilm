const initialState = 3;

export default function cards(state = initialState, action) {
    if(action.type === 'SET_CARDS_QUANTITY'){
        return action.payload;
    }
    return state;
}