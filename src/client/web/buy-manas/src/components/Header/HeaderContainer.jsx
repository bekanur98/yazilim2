import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { setAuthUserData, toggleModalWindowAuth, toggleModalLoginAuth } from '../../actions/index'
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

const mapStateToProps = (state) => ({
    isModalOpen: state.auth.isModalOpen,
    isLogin: state.auth.isLogin
}); 

export default connect(mapStateToProps, {setAuthUserData, toggleModalWindowAuth, toggleModalLoginAuth})(HeaderContainer);