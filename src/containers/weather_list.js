import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  // Where does cityData come from?
  // From this.props.weather that was mapped thru connect ()()
  // See notes.md for full description.
  renderWeather(cityData) {
    const name = cityData.city.name;
    // List of 3-hourly forecasts over next 3 days
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // Destructuring! Assign lon and lat properties to lon and lat variables.
    const {lon, lat} = cityData.city.coord;

    // Just an array of numbers needed by the SparkLines 3rd-party plugin.
    console.log(temps);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// ES6 equivalent to mapStateToProps version below.
// Same principle as the import statements, i.e. use curly braces
// to access / 'pick off' the property from the object.
function mapStateToProps({ weather }) {
  return { weather }; // {weather} === {weather: weather}
}

// function mapStateToProps(state) {
//   const weather = state.weather;
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
