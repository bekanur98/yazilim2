import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { setUserData, toggleIsFetching } from '../../../actions/users';
import { setPosts, setCurrentPage } from '../../../actions/posts';
import Cookies from 'universal-cookie';


class MyPostsContainer extends React.Component {
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        let cookies = new Cookies();  
        document.addEventListener('scroll', this.trackScrolling)
        this.props.setUserData(cookies.get('id'));

    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement)) {
            this.props.setCurrentPage(this.props.currentPage + 1);
            this.props.setPosts(this.props.currentPage);
            document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    render() {
        return <MyPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posters,
        id: state.auth.id,
        isFetching: state.profilePage.isFetching,
        currentPage: state.postsData.currentPage
    }
};


export default connect(mapStateToProps, { setUserData, toggleIsFetching, setPosts, setCurrentPage })(MyPostsContainer);


