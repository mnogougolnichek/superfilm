import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCalendar from './components/MovieCalendar';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="app">
              <Header/>
              {!this.props.listVisibility? <MovieCalendar/>: null}
              {this.props.listVisibility? <MovieList/>: null}
          </div>
      );
  }
}

export default connect(
    state =>({
        listVisibility: state.listVisibility
    }),
    dispatch =>({

    })
)(App);
