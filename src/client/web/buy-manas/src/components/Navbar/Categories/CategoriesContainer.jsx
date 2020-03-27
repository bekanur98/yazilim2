import React from 'react';
import * as axios from 'axios';
import Categories from './Categories';
import { setFaculties } from '../../../actions';
import { connect } from 'react-redux';


class CategoriesContainer extends React.Component{
    componentDidMount() {
        axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/faculties`)
            .then(response => {
                debugger;
                // this.props.setFaculty(response.data."hydra:member".facultyNameKg);
            });
    }


    render(){
        return <Categories faculties={this.props.faculties} />
    }
}

const mapStateToProps = (state) => {
    return{
        faculties: state.categoriesReducer.faculties
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
