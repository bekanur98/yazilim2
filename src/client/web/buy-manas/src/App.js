import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import FacultiesPostsContainer from './components/FacultiesPosts/FacultiesPostsContainer';
import PostsPageContainer from './components/Main/PostsPage/PostsPageContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';

const App = (props) => {

    return (
        <div className="appWrapper">
            <HeaderContainer />
            <Route exact path='/' render={() => <Main />} />
            <Route path='/profile' render={() => <Profile />} />            
            <Route path='/facultiesPosts/:facultyId' render={() => <FacultiesPostsContainer />} />
            <Route path={'/facultiesPosts/:facultyId/posts/:postsId'} render={() => <PostsPageContainer />} />                        
            <Route path={'/posts/:postsId'} render={() => <PostsPageContainer />} />            
            <Route path={'/newPost'} render={() => <NewPostContainer />} />            
            <Footer />
        </div>
    );
}

export default App;
