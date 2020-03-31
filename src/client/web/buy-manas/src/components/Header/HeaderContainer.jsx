import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { setAuthUserData } from '../../actions/index'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/users.json`)
            .then(response => {
                this.props.setAuthUserData(response.data);
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: (id, email, username) => {
            dispatch(setAuthUserData(id, email, username));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);