import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import TopPostsContainer from './components/TopPosts/TopPostsContainer';

const App = (props) => {
   


    return (
        <div className="appWrapper">
            <Header />
            <Navbar />
            <div className="appContentWrapper">
                <TopPostsContainer />
            </div>
        </div>
    );
}

export default App;
