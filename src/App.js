import React,{Component} from 'react';
import DogsList from './DogsList';

import {Switch,Route} from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";

import './App.css';
import DogDetails from './DogDetails';

class App extends Component {
  static defaultProps ={
    dogs:[
      {
        name:"whiskey",
        age:5,
        src:whiskey,
        facts:[
          "whiskey loves eating popcorn",
          "whiskey is a terrible guard dog",

        ]
      },
       {
         name:"hazel",
         age:3,
         src:hazel,
         facts:[
           "Hazel has so much energy",
           "Hazel is so much intelligent"
         ]
       },
       {
         name:"Tubby",
         age:4,
         src:tubby,
         facts:[
           "tubby loves eating food",
           "tubby doesn't like walking"
         ]
       },
      
       
    ]
  };
  render(){
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog =>dog.name.toLowerCase() === name.toLowerCase()
      );
      
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <Switch>

      <Route  exact path="/dogs"  render={()=> <DogsList  dogs={this.props.dogs}/>} />
      <Route  exact path="/dogs/:name"  render={ getDog} />
      </Switch>
      )
    
  }
  
}

export default App;
