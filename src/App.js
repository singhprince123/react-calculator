import React, { Component } from 'react';
import * as math from 'mathjs'

import Buttons from './components/Buttons'
import Display from './components/Display'
import Header from './components/Header'

import './App.css';

class App extends Component {

  state = {
    operationResult : []
  }

  calculateReusult = () => {
     const data = this.state.operationResult.join('');
     let result = math.eval(data)
     result = math.format(result, { precision : 14});
     this.setState({
       operationResult: [result]
     })
  }

  handleClick = (e)=> {
    const value = e.target.dataset.value;


    switch(value){
      case 'clear':
          this.setState({
            operationResult: []
          })
          break;
      case 'equal':
          this.calculateReusult();
          break;
      case 'delete':
           const newdata = [...this.state.operationResult];
           newdata.pop();
           this.setState({
             operationResult: newdata
           });
           break;
      default:
          this.setState({ operationResult : this.state.operationResult.concat(value)});
          break 
  }
  }


  render() {
    return (
        <React.Fragment>
      <Header />
      <div className="Container">
        
        <div className="Calculator">
        <Display data={this.state.operationResult} />
        <Buttons handleClick={this.handleClick} />
        
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
