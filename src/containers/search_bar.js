import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Have to bind the 'this' context when passing a callback function that
    // uses 'this', such as this.setState in the onInputChange method. Here we're
    // binding this.setState to the this context of the SearchBar component
    // (otherwise the program doesn't know where 'this' refers to when the
    // onInputChange method is called.)
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch the weather data
    this.props.fetchWeather(this.state.term);
    // Clear the input field (changing the state makes SearchBar rerender)
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// Hook up the fetchWeather action creator to the SearchBar container.
// Whenever fetchWeather is called and returns an action, the action will
// be passed (dispatched!) to the middleware and reducers inside the redux
// application.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// Have to have two parameters. We make the first one null because SearchBar
// doesn't care about the redux app state.
export default connect(null, mapDispatchToProps)(SearchBar)
