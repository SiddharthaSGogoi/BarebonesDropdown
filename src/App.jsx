import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      arr: ['hello', 'nope', 'yes'],
      showDropdown: false,
      title: 'Select'
    }
  }
  


  componentDidMount() {
    
  }

  showHideDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown })
  }

  handleItem = (item, key) => {
    this.setState({ title: item })
    this.setState({ showDropdown: !this.state.showDropdown })
    var newArray = this.state.arr.filter((str) => {
      return str.indexOf(item) != 0;
    })
    console.log(newArray)
  }
  

  render() {

    return (
      <div className="App">
        <div className="dd-header" onClick={this.showHideDropdown}>
          {this.state.title} ^ 
        </div>
        {
          this.state.showDropdown && 
          <div className="list">
            <ul>
              {this.state.arr.map((item, key) => (
                <div key={key} onClick={() => this.handleItem(item, key)}>
                  {item}
                </div>
              ))}
            </ul>
        </div>
        }
      </div>
    );
  }
}

