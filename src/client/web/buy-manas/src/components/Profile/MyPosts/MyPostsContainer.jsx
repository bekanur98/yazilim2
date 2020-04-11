import React from 'react'; 
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { setUserData } from '../../../actions/index';


class MyPostsContainer extends React.Component{
    componentDidMount() {
        this.props.setUserData();
    }
    render(){
        return <MyPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posters
    }
}; 


export default connect(mapStateToProps, {setUserData})(MyPostsContainer);


