import React from 'react';
import * as axios from 'axios';
import Categories from './Categories';
import { setFaculties } from '../../../../actions/index';
import { connect } from 'react-redux';


class CategoriesContainer extends React.Component{
    componentDidMount() {
        axios.get(`http://buymanasapi.ru.xsph.ru/index.php/api/faculties.json`)
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
