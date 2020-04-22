import React from 'react';
import FacultiesPosts from './FacultiesPosts';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getFacultiesPosts } from '../../actions/faculties';


class FacultiesPostsContainer extends React.Component{
    componentDidMount(){
        let facultyId = this.props.match.params.facultyId
        this.props.getFacultiesPosts(facultyId)
    }

    render(){
        return <FacultiesPosts {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.postsOfFaculty
    }        
}

export default compose(
    connect(mapStateToProps, { getFacultiesPosts }),
    withRouter
)(FacultiesPostsContainer);  