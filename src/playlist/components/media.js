import React, { PureComponent } from 'react'
import './media.css';
import { Card, CardImg, CardBody,
    CardTitle, CardFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';
export default class Media extends PureComponent {

    state ={       
         author: this.props.author      
    }
/* 
    handleClick=(e)=>{
        this.setState({
            author: "EslavaDev"
        })
    } */
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

            <div className="Media" onClick={this.props.handleClick}>
            <Card className="Media-cover">
              <CardImg top width={260}height={160}src={this.props.cover} alt="Card image cap" />
              <CardBody className="Media-content">
                <CardTitle className="Media-title">{this.props.title}</CardTitle>
                <Button>Button</Button>
              </CardBody>
              <CardFooter className="Media-author">{this.props.author}</CardFooter>
            </Card>
            {/*<div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                    className="Media-image"
                    src={this.props.cover} 
                    alt=""
                    width={260}
                    height={160}
                    />
                    <div className="Media-content">
                        <h4 className="Media-title">{this.props.title}</h4>
                        <p className="Media-author">{this.props.author}</p>
                    </div>
                </div>
        </div>*/}
          </div>
        );
    }
    
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
}