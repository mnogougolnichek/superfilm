import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class ListDate extends Component{
    render() {
        console.log(this.props.date.getDate());
        return <div className="list-date">{
            `${this.props.date.getDate()}
            ${this.props.monthNames[this.props.date.getMonth()]}
            ${this.props.date.getFullYear()}
            `
        }</div>
    }
}

export default connect(
    state =>({
        date: state.date,
        monthNames: state.monthNames
    })
)(ListDate);