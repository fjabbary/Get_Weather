import React from 'react'
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import Header from './components/Header';

class App extends React.Component {

  state = {
    data: null,
    formData: null,
    showResult: false,
  }

  toggleComp = val => {
    this.setState({ showResult: val })
  }

  dataHandler = (data, formData) => {
    this.setState({ data, formData });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          {this.state.showResult ?
            <WeatherResult
              data={this.state.data}
              formData={this.state.formData}
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
