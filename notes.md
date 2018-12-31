# Configuring the API key URL
If anyone else is having 401 problems with the API data showing up, you need to sign up with openweathermap (the sign up option is all the way at the top), then get your own API key which should be in your new profile at openweathermap under the tab 'API Keys'.  Next, copy the key and go back to the URL for the forecast and replace the URL section after 'appid=' with your API key and remove the part for xml (remove this '&mode=xml') so it shows up as json instead.  And you can get a json formatter from the google chrome store named 'JSONView' by gildas, it will auto-unminify all json data that you look up in your browser.

# Where does cityData come from (passed into WeatherList's renderWeather method)
* When a user enters a city name, the fetchWeather action creator (function) does a get request
and returns an action (object) containing the JSON data from http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=51bbacc0962aaa4fe426dbc8ab845ccd as 'payload'.
* Somehow the action returned by fetchWeather is available to WeatherReducer.
* If the action type is FETCH_WEATHER then WeatherReducer returns the updated state (an array of objects).
* combineReducers in reducers/index.js maps the state returned by WeatherReducer to the state object 'weather' property.
* Then mapStateToProps maps the state object 'weather' property to this.props in the WeatherList container and the
connect function makes the state-props mapping available to WeatherList.
* The render method in WeatherList maps over this.props.weather (an array of city weather objects) and calls
the renderWeather method on each one.
* this.props.weather in WeatherList now contains the redux state (i.e. an array of objects, each one containing
  weather data per city). It seems that renderWeather needs a parameter so that each of the objects in
  this.props.weather can be accessed / processed. Not intuitive as you'd think that renderWeather in {this.props.weather.map(this.renderWeather)} should also have parentheses and a parameter.
