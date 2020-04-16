import React from 'react';
import { connect } from 'react-redux';
import NewPost from './NewPost';

class NewPostContainer extends React.Component {
    render() {
        return <NewPost {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {})(NewPostContainer);