import React, { Component } from 'react'
import Search from '../components/search';
class SearchContainer extends Component {
    state={
        value:'Test'
    }
    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.input.value)
    }
    setInputRef = element =>{
        this.input = element
    }
    handleInputChange = event =>{
        this.setState({
            value: this.input.value.replace(' ','-')
        })
    }
  render() {
    return (
        <Search 
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        />
    )
  }
}

export default SearchContainer
