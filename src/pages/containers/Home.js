import React, {Component} from 'react';
import HomeLayout from '../components/HomeLayaout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component{
    state={
        modalVisible: false
    }

    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false,
        })
    } 
    handleOpenModal = (event) =>{
        this.setState({
            modalVisible: true,
        })
    } 

    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {this.state.modalVisible &&
                    <ModalContainer>
                        <Modal
                            handleClick={this.handleCloseModal}
                        ></Modal>
                    </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;