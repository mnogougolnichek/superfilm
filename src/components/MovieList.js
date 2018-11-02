import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchData} from "../actions/fetchData";
import SetCardsQuantityBtn from "./SetCardsQuantityBtn";
import ListDate from "./ListDate";
import {setImageSize} from "../actions/setImageSize";
import {setCardStyle} from "../actions/setCardStyle";

class MovieList extends Component{
    componentWillMount(){
        this.props.onFetchData(this.props.date);
    }

    isImage(item){
        if(item.show.image){
            return `${this.props.imageSize !== 'medium'? item.show.image.original : item.show.image.medium}`
        }else{
            return '';
        }
    }

    render() {
        return <div>
            <ListDate/>
            <div className="card-container">
                {this.props.data.map((item, index) => {
                    if(index < this.props.cardsQuantity){
                        return <div key={index} className="card">
                            <img src={`${this.isImage(item)}`}
                                 onClick={()=>{
                                     this.props.onSetImageSize(this.props.imageSize);
                                     this.props.onSetCardStyle(this.props.imageSize,
                                         this.props.data,
                                         item.id
                                     );
                                 }
                                 }
                                 className={`card-img ${item.imageSize}`}
                                 alt=""/>
                            <div className="card-description">
                                <div>
                                    <div className="card-name">{item.show.name}</div>
                                    <div className="card-year">{item.airdate.substring(0,4)}</div>
                                </div>
                                <div className="card-season">
                                <span>
                                    сезон: {item.season}
                                </span>
                                    <span>
                                    эпизод: {`${item.show._links.self.href.slice(-1)}`}
                                </span>
                                </div>
                            </div>
                        </div>
                    }
                })
                }
                <SetCardsQuantityBtn/>
            </div>
            </div>
    }
}

export default connect(
    state =>({
        data: state.data,
        date: state.date,
        cardsQuantity: state.cardsQuantity,
        imageSize: state.imageSize
    }),
    dispatch =>({
        onFetchData: (data) =>{
            dispatch(fetchData(data));
        },
        onSetImageSize: (imageSize) =>{
            dispatch(setImageSize(imageSize));
        },
        onSetCardStyle: (size, data, id) =>{
            dispatch(setCardStyle(size, data, id));
        }
    })
)(MovieList);