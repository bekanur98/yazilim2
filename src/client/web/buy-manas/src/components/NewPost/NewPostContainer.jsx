import React from 'react';
import { connect } from 'react-redux';
import NewPost from './NewPost';
import { newPost } from '../../actions';

class NewPostContainer extends React.Component {
    render() {
        return <NewPost {...this.props} />
    }
}

const mapStateToProps = (state) => ({ 
    name: state.auth.name,
    id: state.auth.id
});

export default connect(mapStateToProps, {newPost})(NewPostContainer);