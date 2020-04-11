import React from 'react'; 
import { connect } from 'react-redux';
import TopPosts from './TopPosts';
import { setPosts } from './../../../actions/index';

class TopPostsContainer extends React.Component{
    componentDidMount() {
        this.props.setPosts();
    }
    render(){
        return <TopPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.posts
    }
}; 


export default connect(mapStateToProps, {setPosts})(TopPostsContainer);


