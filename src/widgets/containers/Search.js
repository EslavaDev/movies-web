import React, { Component } from 'react'
import Search from '../components/search';
import {connect} from 'react-redux';
import { searchEntities, searchAsyncEntities } from '../../actions';
class SearchContainer extends Component {
    state={
        value:'Luis Fonsi'
    }
    handleSubmit = event =>{
        event.preventDefault();
        //console.log(this.input.value)
        this.props.searchAsyncEntities(this.input.value)
        this.input.value = ''
    }
    setInputRef = element =>{
        this.input = element
    }
    handleInputChange = event =>{
        this.setState({
            value: this.input.value/*.replace(' ','-')*/
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

const mapDispatchToProps = {
    searchEntities,
    searchAsyncEntities
};

export default connect(null,mapDispatchToProps)(SearchContainer) 
