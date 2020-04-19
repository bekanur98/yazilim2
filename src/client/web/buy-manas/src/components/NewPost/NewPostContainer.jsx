import React from 'react';
import { connect } from 'react-redux';
import NewPost from './NewPost';
import { newCurrentImage } from '../../actions';
import { newPostImage } from '../../actions';
import { setPosts, setDepartments, setFaculties} from './../../actions/index';

class NewPostContainer extends React.Component {
    componentDidMount(){
        this.props.setPosts();
        this.props.setDepartments();
        this.props.setFaculties();
    }

    render() {
        return <NewPost {...this.props} />
    }
}

const mapStateToProps = (state) => ({ 
    userId: state.auth.id,
    image: state.postsData.currentImage,
    departments: state.categoriesBlock.departments,
    faculties: state.categoriesBlock.faculties
});

export default connect(mapStateToProps, {newPostImage, newCurrentImage, setPosts, setDepartments, setFaculties})(NewPostContainer);