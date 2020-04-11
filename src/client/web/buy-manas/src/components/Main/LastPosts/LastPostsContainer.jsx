import React from 'react'; 
import { connect } from 'react-redux';
import LastPosts from './LastPosts';
import { setPosts } from '../../../actions/index';

class LastPostsContainer extends React.Component{
    componentDidMount() {
        this.props.setPosts();
    }
    render(){
        return <LastPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.posts
    }
}; 

export default connect(mapStateToProps, {setPosts})(LastPostsContainer);


