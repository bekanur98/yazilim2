import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import TopPosts from './components/TopPosts/TopPosts';

const App = (props) => {
   


    return (
        <div className="appWrapper">
            <Header />
            <Navbar />
            <div className="appContentWrapper">
                <TopPosts />
            </div>
        </div>
    );
}

export default App;
