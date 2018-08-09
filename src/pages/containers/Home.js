import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayaout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/VideoPlayer';

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

                    <Categories categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
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

export default Home;