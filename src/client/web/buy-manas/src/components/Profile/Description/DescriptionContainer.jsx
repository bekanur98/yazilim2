import React from 'react';
import Description from './Description';
import { setUserData, toggleModalWindowEditProfile, toggleIsFetching } from '../../../actions/index';
import { connect } from 'react-redux';


class DescriptionContainer extends React.Component {
    componentDidMount() {
        this.props.setUserData(this.props.id);
    }
    render() {
        return <Description {...this.props} />
    }
}

const mapStateToProps = (state) => {

    return {
        name: state.auth.name,
        id: state.auth.id,
        username: state.auth.username,
        email: state.auth.email,
        posters: state.auth.posters,
        phone: state.auth.phone,
        faculty: state.auth.faculty,
        isModalOpen: state.profilePage.isModalOpen,
        isFetching: state.profilePage.isFetching, 
    }
}
 

export default connect(mapStateToProps, {setUserData, toggleModalWindowEditProfile, toggleIsFetching})(DescriptionContainer);