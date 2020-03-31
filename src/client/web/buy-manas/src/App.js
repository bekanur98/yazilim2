import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';

const App = (props) => {

    return ( 
        <div className="appWrapper">
            <HeaderContainer />

            <Route exact path='/' render={() => <Main />} />
            <Route path='/profile' render={() => <Profile />} />

            <Footer />
        </div> 
    );
}

export default App;
