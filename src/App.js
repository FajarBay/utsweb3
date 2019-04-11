import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {message: "Light"}; //state
    this.updateMessage = this.updateMessage.bind(this);
    this.back = {
      color : "Light",
    };
  }

  updateMessage(){
    this.setState({
      message: "Dark" //changed state
    });
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      color : menu.color,
    });
  }
  render() {
    return (
      <div id="app">
        {/* map akan loop sebanyak menu yang didefinisikan*/}
        {/* kemudian mengembalikan elemen <a/> */}
        <h1>Theme {this.state.message}!</h1>
              <button onClick={this.updateMessage}>Ganti tema</button>
        </div>
    );
  }
}

export default App;
