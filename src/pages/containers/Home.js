import React, {Component} from 'react';
import HomeLayout from '../components/HomeLayaout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/Modal';
import Modal from '../../widgets/components/modal';


class Home extends Component{

    render(){
        return(
            <HomeLayout>
            <Related />
                <Categories categories={this.props.data.categories}/>
                <ModalContainer>
                    <Modal></Modal>
                </ModalContainer>
            </HomeLayout>
        )
    }
}

export default Home;