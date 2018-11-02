const initialState = false;

export default function listVisibility(state = initialState, action) {
    if(action.type === 'SET_LIST_VISIBILITY'){
        return action.payload;
    }
    return state;
}