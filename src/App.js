import React,{Component} from 'react';
import './App.css';
import ItemList from './ItemList.js';

class App extends Component{
  render(){
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
