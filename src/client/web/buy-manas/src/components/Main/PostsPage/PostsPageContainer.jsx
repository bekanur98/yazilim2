import React from 'react';
import PostsPage from './PostsPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getOnePost } from '../../../actions/index';

class PostsPageContainer extends React.Component{
    componentDidMount(){ 
        let postId = this.props.match.params.postsId
        this.props.getOnePost(postId)
    }
    render(){
        return <PostsPage {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    post: state.postsData.forPostPage
})

export default compose( connect(mapStateToProps, { getOnePost }), withRouter)(PostsPageContainer)
