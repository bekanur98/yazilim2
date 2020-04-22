import React from 'react'; 
import { connect } from 'react-redux';
import LastPosts from './LastPosts';
import { setPosts, setPostByTitle } from '../../../actions/index';

class LastPostsContainer extends React.Component{ 
    componentDidMount() {
        this.props.setPosts(); 

    } 
    render(){
        return <LastPosts {...this.props} loadMore={this.loadMore} state={this.state}/>
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.posts,
        searchedPosts: state.postsData.searchedPosts
    }
}; 

export default connect(mapStateToProps, {setPosts,setPostByTitle})(LastPostsContainer);


