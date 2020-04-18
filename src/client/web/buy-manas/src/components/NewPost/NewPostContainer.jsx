import React from 'react';
import { connect } from 'react-redux';
import NewPost from './NewPost';
import { newCurrentImage } from '../../actions';
import { newPostImage } from '../../actions';
import { setPosts } from './../../actions/index';

class NewPostContainer extends React.Component {
    componentDidMount(){
        this.props.setPosts();
    }

    render() {
        return <NewPost {...this.props} />
    }
}

const mapStateToProps = (state) => ({ 
    userId: state.auth.id,
    image: state.postsData.currentImage
});

export default connect(mapStateToProps, {newPostImage, newCurrentImage, setPosts})(NewPostContainer);