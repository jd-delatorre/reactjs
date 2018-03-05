import React from 'react';
import * as Babel from 'babel-standalone';

export default class BabelTransformer extends React.Component {
  constructor(props){
    super(props);
    //setting state
    this.state = {
      inputJSX: '/* Write some awesome JSX! */',
      outputJS: '',
      error: ''
    }

    //transform jsx we input
    this.transfomJSX = this.transformJSX.bind(this);
  }
  transformJSX(event){
    let code = event.target.value;  //keypress that occurs when user types

    try {
      this.setState({
        outputJS: Babel.transform(code, { presets: ['es2015', 'react'] }).code,
        error: ''
      });
    }
    catch(error) {
      this.setState({
        error: error.message
      });
    }
  }
  render(){
    return (
      <div>
        <div className="container">
          <textarea id="input" onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
          <div id="output">{this.state.outputJS}</div>
        </div>
        <footer> {this.state.error} </footer>
      </div>
    )
  }
}
