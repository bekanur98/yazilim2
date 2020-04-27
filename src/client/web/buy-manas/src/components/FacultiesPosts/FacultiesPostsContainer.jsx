import React from 'react';
import FacultiesPosts from './FacultiesPosts';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getFacultiesPosts } from '../../actions/faculties';
import { setCurrentPage } from '../../actions/posts';




class FacultiesPostsContainer extends React.Component{
    
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    } 

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        const facultyId = this.props.match.params.facultyId;

        if (this.isBottom(wrappedElement)) {
            this.props.setCurrentPage(this.props.currentPage + 1);
            this.props.getFacultiesPosts(facultyId, this.props.currentPage);
            document.removeEventListener('scroll', this.trackScrolling); 
        }
    }; 

    componentDidMount(){
        const facultyId = this.props.match.params.facultyId;
        this.props.getFacultiesPosts(facultyId)
        document.addEventListener('scroll', this.trackScrolling)
    }

    render(){
        return <FacultiesPosts {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.postsData.postsOfFaculty,
        currentPage: state.postsData.currentPage
    }        
}

export default compose(
    connect(mapStateToProps, { getFacultiesPosts, setCurrentPage }),
    withRouter
)(FacultiesPostsContainer);  