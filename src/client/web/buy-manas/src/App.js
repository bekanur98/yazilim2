import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import TopPostsContainer from './components/TopPosts/TopPostsContainer';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import { createStore } from 'redux';
import Footer from './components/Footer/Footer';

const App = (props) => {
   
    const store = createStore(rootReducer)

    return (
        <Provider store={store}>
            <div className="appWrapper">
                <Header />
                <Navbar />
                <div className="appContentWrapper">
                    <TopPostsContainer />
                    <Footer />
                </div>
            </div>
        </Provider>
    );
}

export default App;
