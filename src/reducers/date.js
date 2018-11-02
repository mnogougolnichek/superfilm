const initialState = new Date();

export default function date(state = initialState, action) {
    if(action.type === 'SET_DATE'){
        return action.payload;
    }
    return state;
}