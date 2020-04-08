import React from 'react'; 
import { connect } from 'react-redux';
import * as axios from 'axios';
import LastPosts from './LastPosts';
import { setPosts } from '../../../actions/index';
import { API_URL } from '../../../constants';

class LastPostsContainer extends React.Component{
    componentDidMount() {
        axios.get(`${API_URL}posters.json`)
            .then(response => {
                this.props.setPosts(response.data);
            });
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


