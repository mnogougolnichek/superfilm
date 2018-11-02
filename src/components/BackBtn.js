import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {setListVisibility} from "../actions/setListVisibility";
import {setCardsQuantity} from "../actions/setCardsQuantity";

class BackBtn extends Component{
    render() {
        return <button
            className="backBtn"
            onClick={()=>{
            this.props.onSetVisibility(false);
            this.props.onSetCardsQuantity(3);
        }}>

        </button>
    }
}

export default connect(
    state =>({
        data: state.data
    }),
    dispatch =>({
        onSetVisibility: (value) =>{
            dispatch(setListVisibility(value));
        },
        onSetCardsQuantity: (cardsQuantity) =>{
            dispatch(setCardsQuantity(cardsQuantity));
        }
    })
)(BackBtn);