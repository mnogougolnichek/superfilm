
export const setCardStyle = (imageSize, data, id) => dispatch =>{
    let newSize = imageSize === 'original'? 'medium': 'original';
    console.log(id);
    let newData = data.map((item)=>{
        if(item.id === id){
            item.imageSize = newSize;
        }
        return item;
    });
    dispatch({type: 'SET_CARD_IMAGE_SIZE', payload: newData});
};