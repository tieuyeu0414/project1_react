import React, { Component } from 'react';
import Color from './ChangeColorSize/Color';
import Fontsize from './ChangeColorSize/Fontsize';
import './ChangeColorSize/style.css';
import Form from './FormDataBase/Form';
// import Tranning from './tranning/tranning.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 1,
      color: "red",
      fontSize: 14
    }
  }
  onClickBorder = (item) =>{
    this.setState({
      color: item.color
    })
  }
  onClickUpSize = () =>{
    this.setState({
      fontSize: this.state.fontSize + 1
    })
  }
  onClickDownSize = () =>{
    if(this.state.fontSize >8 ){
      this.setState({
        fontSize: this.state.fontSize - 1
      })
    }
    else return
  }
  onReset = () =>{
    this.setState({
      color: "red",
      fontSize: 14
    })
  }
  render() {
    const {color, fontSize} = this.state;
    return (
      <div>
        <div>
          <div className="grid">
            <Color 
            colorTxT = {color}
            onClickBorder = {this.onClickBorder}
            />
            <Fontsize size={fontSize} onClickUpSize={this.onClickUpSize} onClickDownSize={this.onClickDownSize}/>
          </div>
          <div className="btna">
            <button onClick={this.onReset}>Reset</button>
          </div>
          <div className="txt-content">
              <p>Color: {color} - Fontsize: {fontSize}px</p>
              <div className="content">
                <p style={{color: color, fontSize: fontSize}}>Nội dụng setting</p>
              </div>
          </div>
        </div>
        <div>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;