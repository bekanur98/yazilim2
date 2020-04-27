import React from 'react';
import Description from './Description';
import { setUserData, toggleIsFetching, newAvatar, editProfile, toggleModalWindowEditProfile} from '../../../actions/users';
import { setFaculties, setDepartments } from '../../../actions/faculties';
import { connect } from 'react-redux';


class DescriptionContainer extends React.Component {
    componentDidMount() {
        this.props.setUserData(this.props.id);
        this.props.setDepartments();
        this.props.setFaculties();
    }
    render() {
        return <Description {...this.props} />
    }
}

const mapStateToProps = (state) => {

    return {
        avatar: state.auth.avatar,
        myAvatar: state.auth.images,
        name: state.auth.name,
        id: state.auth.id,
        username: state.auth.username,
        email: state.auth.email,
        posters: state.profilePage.posters,
        phone: state.auth.phone,
        faculty: state.auth.faculty,
        isModalOpen: state.profilePage.isModalOpen,
        isFetching: state.profilePage.isFetching, 
        faculties: state.categoriesBlock.faculties
    }
}
 

export default connect(mapStateToProps, {setUserData, toggleModalWindowEditProfile, toggleIsFetching, newAvatar, editProfile, setFaculties, setDepartments})(DescriptionContainer);