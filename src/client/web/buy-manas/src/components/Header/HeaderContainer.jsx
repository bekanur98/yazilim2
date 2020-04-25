import React from 'react';
import Header from './Header';
import { setAuthUserData, toggleModalWindowAuth, toggleModalLoginAuth, login, logout, register, logWithCookie } from '../../actions/login'
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

class HeaderContainer extends React.Component { 
    componentDidMount(){ 
        let cookies = new Cookies();  
        if(cookies.get('id')){
            this.props.logWithCookie(cookies.get('id'));
        }
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isModalOpen: state.auth.isModalOpen,
    wannaLogin: state.auth.wannaLogin,
    isAuth: state.auth.isAuth,
    faculties: state.categoriesBlock.faculties,
    username: state.auth.username,
    password: state.auth.password,
}); 

export default connect(mapStateToProps, {setAuthUserData, toggleModalWindowAuth, toggleModalLoginAuth, login, logout, register, logWithCookie})(HeaderContainer);