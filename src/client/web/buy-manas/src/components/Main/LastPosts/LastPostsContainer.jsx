import React from 'react';
import { connect } from 'react-redux';
import LastPosts from './LastPosts';
import { setPosts, setPostByTitle, setCurrentPage } from '../../../actions/posts';
import { toggleIsFetching } from '../../../actions/users';

class LastPostsContainer extends React.Component {

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling)
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
        return <LastPosts {...this.props} loadMore={this.loadMore} state={this.state} nextPage={this.nextPage} />
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postsData.posts,
        searchedPosts: state.postsData.searchedPosts,
        currentPage: state.postsData.currentPage,
        isFetching: state.profilePage.isFetching
    }
};

export default connect(mapStateToProps, { setPosts, setPostByTitle, toggleIsFetching, setCurrentPage })(LastPostsContainer);


