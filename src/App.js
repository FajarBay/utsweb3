import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //default
    this.state = {
      // active : "light",
      theme : "Light",
      color : "white"
    };
  }
  clicked(menu){
    this.setState({
      // active: menu,
      theme : menu.theme,
      color : menu.color
    });
  }
  render() {
    return (
      <div className={"bg "+this.state.color}>
        <nav>
        {this.props.items.map((menu,index) => {
            var style = 'menu';

            //penamaan state color tidak harus sesuai pada menu.
            if(this.state.color === menu.color){
              style = `${style} is-active`;
            }

            return <a
              className = {style+" "+menu.color}
              onClick = {this.clicked.bind(this,menu)}
              key = {index}
            >
              {menu.theme}
            </a>;
          }
        )}
        </nav>
        <div className = "info">
          theme <span className = {"selected "+this.state.color}>{this.state.theme}</span><br/><br/>
        </div>
      </div>
    );
  }
}

export default App;
