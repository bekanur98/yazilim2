import React from 'react';
import Description from './Description';
import * as axios from 'axios';
import { setUserData, toggleModal } from '../../../actions/index';
import { connect } from 'react-redux';


class DescriptionContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/users/5.json`)
            .then(response => {
                this.props.setUserData(response.data);
            });
    }
    render() {
        return <Description {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.profilePage.name,
        id: state.profilePage.id,
        username: state.profilePage.username,
        email: state.profilePage.email,
        posters: state.profilePage.posters,
        phone: state.profilePage.phone,
        faculty: state.profilePage.faculty,
        isModalOpen: state.profilePage.isModalOpen
    }
}
 

export default connect(mapStateToProps, {setUserData, toggleModal})(DescriptionContainer);