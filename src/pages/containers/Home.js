import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayaout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/VideoPlayer';
import { connect } from 'react-redux';
import {List as list} from 'immutable';
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

    const categories = state.get('data').get('categories').map((id)=> {
        return state.get('data').get('entities').get('categories').get(id)
    })
    let searchResults = list()
    const search = state.get('data').get('search');
    if(search) {
        console.log(search.toString().toLowerCase())
		const mediaList = state.get('data').get('entities').get('media');
		searchResults = mediaList.filter((item) => {
			if (item.get('author').toLowerCase().includes(search.toString().toLowerCase()) || item.get('title').toLowerCase().includes(search.toString().toLowerCase())){
				return true
			}
		}).toList();
	}

    return{
        categories,
        search : searchResults
    }
}


export default connect(mapStateToProps)(Home);