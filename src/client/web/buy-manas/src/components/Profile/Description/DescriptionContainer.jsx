import React from 'react';
import Description from './Description';
import * as axios from 'axios';
import { setUserData } from '../../../actions/index';


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
        name: state.profileReducer.name,
        id: state.profileReducer.id,
        username: state.profileReducer.username,
        email: state.profileReducer.email,
        posters: state.profileReducer.posters,
        phone: state.profileReducer.phone,
        faculty: state.profileReducer.faculty,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => {
            dispatch(setUserData(data));
        }
    }
}

export default (mapStateToProps, mapDispatchToProps)(DescriptionContainer);