
export const setImageSize = (imageSize) => dispatch =>{
    let newSize = imageSize === 'original'? 'medium': 'original';
    console.log(newSize);
    dispatch({type: 'SET_IMAGE_SIZE', payload: newSize});
};