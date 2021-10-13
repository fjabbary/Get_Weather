import React, { Component } from 'react'


export default class WeatherResult extends Component {
    //Convert Temp from Kelvin to Celcius
    kelvinToCelcius(temp) {
        const celcius = temp - 273;
        return celcius.toFixed(2) + ' ℃'
    }
    //Convert Temp from Kelvin to Fahrenheit
    kelvinToFahrenheit(temp) {
        const celsius = temp - 273;
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
        return fahrenheit.toFixed(2) + ' ℉';
    }

    render() {
        const { temp } = this.props.data.main
        const { location, unit } = this.props.formData
        let temperature;
        unit === 'fahrenheit' ? temperature = this.kelvinToFahrenheit(temp) : temperature = this.kelvinToCelcius(temp)
        return (
            <React.Fragment>
                <div className="card mb-5">
                    <div className="card-body">
                        Weather in {location} is {temperature}
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary me-4">Close</button>
                    <button className="btn btn-primary" onClick={() => this.props.toggleComp('one')}>More Weather</button>
                </div>
            </React.Fragment>
        )
    }
}

