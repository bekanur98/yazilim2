import React from 'react';
import * as axios from 'axios';
import Categories from './Categories';
import { setFaculties } from '../../../../actions/index';
import { connect } from 'react-redux';
import { API_URL } from '../../../../constants';


class CategoriesContainer extends React.Component{
    componentDidMount() {
        axios.get(`${API_URL}faculties`)
            .then(response => {
                    this.props.setFaculties(response.data);
            });
    }


    render(){
        return <Categories faculties={ this.props.faculties } />
    }
}

const mapStateToProps = (state) => {
    return{
        faculties: state.categoriesBlock.faculties
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        setFaculties: (facultyName) => {
            dispatch(setFaculties(facultyName));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesContainer);
