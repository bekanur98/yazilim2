import React from 'react'; 
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { setUserData } from '../../../actions/index';


class MyPostsContainer extends React.Component{
    componentDidMount() {
        this.props.setUserData(this.props.id);
    }
    render(){
        return <MyPosts {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.auth.posters,
        id: state.auth.id
    }
}; 


export default connect(mapStateToProps, {setUserData})(MyPostsContainer);


