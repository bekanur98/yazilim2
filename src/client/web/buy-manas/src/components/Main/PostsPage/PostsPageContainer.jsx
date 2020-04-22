import React from 'react';
import PostsPage from './PostsPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getOnePost } from '../../../actions/posts';
import { newComment } from '../../../actions/comments';

class PostsPageContainer extends React.Component{
    componentDidMount(){ 
        const postId = this.props.match.params.postsId
        this.props.getOnePost(postId)
    }
    render(){
        return <PostsPage {...this.props} postId={this.props.match.params.postsId}/>
    }
}

const mapStateToProps = (state) => ({
    post: state.postsData.forPostPage,
    comments: state.postsData.comments,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose( connect(mapStateToProps, { getOnePost, newComment }), withRouter)(PostsPageContainer)
