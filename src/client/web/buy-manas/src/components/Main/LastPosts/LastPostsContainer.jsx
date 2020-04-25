import React from 'react'; 
import { connect } from 'react-redux';
import LastPosts from './LastPosts';
import { setPosts, setPostByTitle, setCurrentPage } from '../../../actions/posts';
import { toggleIsFetching } from '../../../actions/users';

class LastPostsContainer extends React.Component { 

    componentDidMount() {
        this.props.setPosts(); 
    }  
 
    render(){
        return <LastPosts {...this.props} loadMore={this.loadMore} state={this.state} nextPage={this.nextPage} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.posts,
        searchedPosts: state.postsData.searchedPosts,
        currentPage: state.postsData.currentPage
    }
}; 

export default connect(mapStateToProps, {setPosts, setPostByTitle, toggleIsFetching, setCurrentPage})(LastPostsContainer);


