import React from 'react'
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import Header from './components/Header';

class App extends React.Component {

  state = {
    data: null,
    formData: null,
    step: 'one',
  }

  toggleComp = val => {
    this.setState({ step: val })
  }

  dataHandler = (data, formData) => {
    this.setState({ data, formData });
  }

  render() {
    const { data, formData, step } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          {step === 'two' ?
            <WeatherResult
              data={data}
              formData={formData}
              toggleComp={this.toggleComp} />
            :
            <WeatherForm
              dataHandler={this.dataHandler}
              toggleComp={this.toggleComp} />}
        </div>
      </div>
    )
  }

}

export default App;
