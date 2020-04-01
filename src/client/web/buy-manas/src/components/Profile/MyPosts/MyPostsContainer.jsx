import React from 'react'; 
import { connect } from 'react-redux';
import * as axios from 'axios';
import MyPosts from './MyPosts';
import { setUserData } from '../../../actions/index';


class MyPostsContainer extends React.Component{
    componentDidMount() {
        axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/users/5.json`)
            .then(response => {
                this.props.setUserData(response.data);
            });
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


