import React, {Component} from 'react';
import { CardList } from './components/card-component/card-list';
import { SearchBox } from './components/search-bar/search-box';
import './App.css';


class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchFeild: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

 handelChange = e => {
    this.setState({searchFeild: e.target.value });
  }

  render(){

    const {monsters, searchFeild} = this.state;
    const filteredMonsters= monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
    );
    return(
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handelChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
