import React, {Component} from 'react';
import CardList from '../components/Cards';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import '../css/style.css'
import ErrorBoundry from'./ErrorBoundry'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    console.log("Component Did mount");
    fetch("https://jsonplaceholder.typicode.com/USERS")
    .then(response => response.json())
    .then(json => this.setState({robots:json}))

  }
  searchFunction = (event) => {
    console.log("function called")
    this.setState({searchField:event.target.value})
    
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    });
    if (this.state.robots.length === 0) {
      return (
        <div>loading</div>
      )
    }
    return (
      <div className="tc">
        <h1 className='heading'>Robots HEHe</h1>
        <SearchBox updateFunction={this.searchFunction}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robot={filteredRobots}/>

          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App;