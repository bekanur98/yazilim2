import React from 'react'; 
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { setUserData, toggleIsFetching } from '../../../actions/users';
import { setPosts } from '../../../actions/posts';


class MyPostsContainer extends React.Component{
    componentDidMount() {
        if(this.props.id){
            this.props.setUserData(this.props.id);
        }
        this.props.setPosts();
    }
    render(){
        return <MyPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posters,
        posts2: state.auth.posters,
        id: state.auth.id,
        isFetching: state.profilePage.isFetching
    }
}; 


export default connect(mapStateToProps, {setUserData, toggleIsFetching, setPosts})(MyPostsContainer);


