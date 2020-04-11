import React from 'react';
import Description from './Description';
import { setUserData, toggleModalWindowEditProfile, toggleIsFetching } from '../../../actions/index';
import { connect } from 'react-redux';


class DescriptionContainer extends React.Component {
    componentDidMount() {
        this.props.setUserData();
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
        isModalOpen: state.profilePage.isModalOpen,
        isFetching: state.profilePage.isFetching
    }
}
 

export default connect(mapStateToProps, {setUserData, toggleModalWindowEditProfile, toggleIsFetching})(DescriptionContainer);