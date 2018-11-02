import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {setCardsQuantity} from "../actions/setCardsQuantity";

class SetCardsQuantityBtn extends Component{
    showMore(){
        return `Показать еще ${this.props.data.length - this.props.cardsQuantity} сериала`
    }

    showLess(){
        return 'Показать основные'
    }

    render() {
        return <button
            className="setCardsQuantityBtn"
            onClick={()=>{
                let cardsQuantity = this.props.cardsQuantity > 3 ? 3 : this.props.data.length;
                this.props.onSetCardsQuantity(cardsQuantity);
            }}>
            {this.props.cardsQuantity > 3 ? this.showLess() : this.showMore()}
        </button>
    }
}

export default connect(
    state =>({
        data: state.data,
        cardsQuantity: state.cardsQuantity,
    }),
    dispatch =>({
        onSetCardsQuantity: (cardsQuantity) =>{
            dispatch(setCardsQuantity(cardsQuantity));
        }
    })
)(SetCardsQuantityBtn);