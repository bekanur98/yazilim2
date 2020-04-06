import React from 'react'; 
import { connect } from 'react-redux';
import * as axios from 'axios';
import TopPosts from './TopPosts';
import { setPostsAC } from './../../../actions/index';

class TopPostsContainer extends React.Component{
    componentDidMount() {
        axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/posters.json`)
            .then(response => {
                this.props.setPosts(response.data);
            });
    }
    render(){
        return <TopPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.topPostsBlock.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        setPosts: (post) => {
            dispatch(setPostsAC(post));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TopPostsContainer);


