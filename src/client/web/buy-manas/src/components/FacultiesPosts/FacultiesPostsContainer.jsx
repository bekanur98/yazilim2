import React from 'react';
import FacultiesPosts from './FacultiesPosts';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setPosts } from '../../actions/index';


class FacultiesPostsContainer extends React.Component{
    componentDidMount(){
        this.props.setPosts();
    }

    render(){
        return <FacultiesPosts {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.posts
    }        
}

export default compose(
    connect(mapStateToProps, { setPosts }),
    withRouter
)(FacultiesPostsContainer);  