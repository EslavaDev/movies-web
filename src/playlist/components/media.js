import React, { Component } from 'react'
import './media.css';
import PropTypes from 'prop-types';
export default class Media extends Component {

    state ={       
         author: this.props.author      
    }
/*     constructor(props){
        super(props)
        this.state={
            author: props.author
        }
        //this.handleClick = this.handleClick.bind(this)
    } */

    handleClick=(e)=>{
        this.setState({
            author: "EslavaDev"
        })
    }
    render(){
        const {author} = this.state
        const styles={
            container:{
                fontSize: 14,
                backgroundColor: 'red',
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid'
            }
        }
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                    className="Media-image"
                    src="./images/covers/bitcoin.jpg" 
                    alt=""
                    />
                    <div className="Media-content">
                        <h3 className="Media-title">{this.props.title}</h3>
                        <p className="Media-author">{this.state.author}</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
}