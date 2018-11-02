const initialState = 'medium';

export default function imageSize(state = initialState, action) {
    if(action.type === 'SET_IMAGE_SIZE'){
        return action.payload;
    }
    return state;
}