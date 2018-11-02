import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Calendar from 'react-calendar';
import infoBlockImg from '../images/infoimg.jpg';
import {setDate} from "../actions/setDate";
import {fetchData} from "../actions/fetchData";
import {setListVisibility} from "../actions/setListVisibility";

class MovieCalendar extends Component {

    onChange = date => {
        this.props.onSetDate(date);
        this.props.onSetVisibility(true);
        this.props.onFetchData(this.props.date);
    };

    render() {
        return (
            <div className="calendar-block" id="calendar">
                <div className="info-block">
                    <img src={infoBlockImg} className="info-block__img" alt=""/>
                    <p>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.</p>
                </div>
                <Calendar
                    onChange={this.onChange}
                    value={this.props.date}
                />
            </div>
        );
    }
}

export default connect(
    state =>({
        date:state.date
    }),
    dispatch =>({
        onSetDate: (date) =>{
            dispatch(setDate(date));
        },
        onFetchData: (date) =>{
            dispatch(fetchData(date))
        },
        onSetVisibility: (value) =>{
            dispatch(setListVisibility(value));
        }
    })
)(MovieCalendar);