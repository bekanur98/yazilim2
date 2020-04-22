import React from 'react';
import Header from './Header';
import { setAuthUserData, toggleModalWindowAuth, toggleModalLoginAuth, login, logout, register, logWithLocalStorage } from '../../actions/login'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component { 
    componentDidMount(){
        let myData = localStorage.getItem('myLoginData')
        if(myData){
            myData = JSON.parse(myData)
            this.props.logWithLocalStorage(myData);
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
    username: state.auth.username
}); 

export default connect(mapStateToProps, {setAuthUserData, toggleModalWindowAuth, toggleModalLoginAuth, login, logout, register, logWithLocalStorage})(HeaderContainer);