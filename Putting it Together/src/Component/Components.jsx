
import React, { Component } from 'react';

class PersonComponent extends Component{
  constructor(props){
      super(props);
      this.state ={
          age: this.props.age 
      };
  }
  changeAge = () =>{
      this.setState({age:this.state.age +1}); 
  };
  render(){
      return(

          <div>
              <div>
                  <h1>{this.props.lastName}, {this.props.firstName}</h1>
                  <p>Age: {this.state.age}</p>
                  <p>Hair Color: {this.props.hairColor}</p>
                  <button onClick={this.changeAge}>birthday button for {this.props.firstName}{" "}{this.props.lastName}</button>
              </div>
          </div>
      );

  }
}

export default PersonComponent;