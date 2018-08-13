import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayaout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/VideoPlayer';
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        modalVisible: false
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related></Related>

                    <Categories categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoPlay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

const mapStateToProps = (state, props) => {

    const categories = state.data.categories.map((id)=> {
        return state.data.entities.categories[id]
    })

    return{
        categories,
        search: state.search
    }
}


export default connect(mapStateToProps)(Home);