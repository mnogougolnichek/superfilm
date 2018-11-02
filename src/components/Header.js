import React, {Component} from 'react';
import '../App.css';
import connect from "react-redux/es/connect/connect";
import BackBtn from "./BackBtn";

class Header extends Component {

    render() {
        return <header>
            {this.props.listVisibility? <BackBtn/>: null}
            <h1>Super film</h1>
        </header>
    }
}

export default connect(
    state =>({
        listVisibility: state.listVisibility
    })
)(Header);