import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import { Route, withRouter } from 'react-router-dom';
import FacultiesPostsContainer from './components/FacultiesPosts/FacultiesPostsContainer';
import PostsPageContainer from './components/Main/PostsPage/PostsPageContainer';
import NewPostContainer from './components/NewPost/NewPostContainer';
import { connect } from 'react-redux';
import { initializeApp } from './actions/login'
import { setPosts } from './actions/posts'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

    componentDidMount() {
        this.props.setPosts();
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp, setPosts })
)
    (App);
