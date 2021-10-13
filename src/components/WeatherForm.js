import React, { Component } from 'react'
import axios from 'axios'
import { apiKey } from '../apiKey'
import ErrorModal from './Modal'

export default class WeatherForm extends Component {

    state = {
        showMsg: false,
        userfullname: '',
        location: '',
        unit: '',
        error: false,
    }
    //Updates state base on text input field
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Updates state based on unit of temperature selected
    handleUnitChange = e => {
        this.setState({
            unit: e.target.value
        })
    }

    //Show Welcome message on blur effect if username exists
    handleblur = () => {
        const { userfullname } = this.state;

        if (userfullname.length > 0) {
            this.setState({ showMsg: true })
        } else {
            this.setState({ showMsg: false })
        }
    }

    //Handle form submission
    handleSubmit = e => {
        const { location } = this.state;
        e.preventDefault();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
        axios.get(url).then(res => {
            //Pass data to App component
            this.props.dataHandler(res.data, this.state)
            this.props.toggleComp(true)
        }).catch(err => {
            this.setState({ error: true })
        })
    }

    handleErrorClear = () => {
        this.setState({ error: false })
    }

    render() {
        const { showMsg, userfullname, location, error } = this.state;
        return (
            <React.Fragment>
                <div className="mb-3">
                    <label htmlFor="userfullname" className="form-label">User Name</label>
                    <input type="email" className="form-control" placeholder="Enter your name" id="userfullname" name="userfullname" onBlur={this.handleblur} onChange={this.handleInputChange} value={userfullname} required />
                </div>

                {showMsg ? <div className="alert alert-primary" role="alert">
                    <p>Hello {userfullname} </p>
                    <p>Please Enter City Name, and choose "Weather response in"</p>
                </div> : null}

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">City/Location</label>
                        <input type="text" className="form-control" name="location" id="location" placeholder="Enter City / Location" onChange={this.handleInputChange} value={location} required />
                    </div>

                    <div className="form-check">
                        <p>Select the Weather response In</p>
                        <input className="form-check-input" type="radio" name="temperature" id="fahrenheit" value="fahrenheit" onChange={this.handleUnitChange} required />
                        <label className="form-check-label" htmlFor="fahrenheit">Fahrenheit</label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="temperature" id="celcius" value="celcius" onChange={this.handleUnitChange} />
                        <label className="form-check-label" htmlFor="celcius">Celcius</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Get Weather</button>
                </form>
                <ErrorModal error={error} handleErrorClear={this.handleErrorClear} />
            </React.Fragment>
        )
    }
}
