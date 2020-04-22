import React, { useState } from 'react';
import styles from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getLocale } from '../../i18next'; 


const NewPost = (props) => {
    const facultyName = 'facultyName' + getLocale().charAt(0).toUpperCase() + getLocale().slice(1);
    const depName = 'dep_name_' + getLocale().charAt(0).toLowerCase() + getLocale().slice(1);
    let date = new Date(); 
    const uploadImage = e => {
        if(e.target.files.length){
            props.newCurrentImage(e.target.files[0]);
        }  
    } 
    let submit = (value) => {
        let obj = {
            ...value,
            publishedAt: date,
            author: `/api/users/${props.userId}`, 
            rating: 0,
            images: props.image
        }
        props.newPostImage(obj);
        value.title = '';
        value.description = '';
        value.cost = ''; 

    };

    const [state, setState] = useState({
        faculty: null,
        department: null,
        departmentList: [...props.departments]
    }); 

    const changeFaculty = (item) => { 
        setState({
                faculty: parseInt(item.target.value), 
                department: state.departmentList.filter( i => i.faculty.id == parseInt(item.target.value) ),
                departmentList: [...props.departments] 
            })
    }   

    return(
        <div className={styles.newPostWrapper}>
            <form onSubmit={props.handleSubmit(submit)}>
                <div className={styles.newImage}>
                    <p className={styles.blockName}>Загрузите фотографии</p>                
                    <div className={styles.inputs}><input onChange={uploadImage} type='file'/></div>
                </div>

                <div className={styles.newTitle}>
                    <p className={styles.blockName}>Название <sup>*</sup> </p>                
                    <div className={styles.inputs}>
                        <Field component={Input} name='title' type='text' placeholder='Название' validate={[required]} />
                    </div>
                </div>

                <div className={styles.newDescr}>
                    <p className={styles.blockName}>Описание <sup>*</sup></p>                
                    <div className={styles.inputs}>
                        <Field component={Textarea} name='description' type='text' placeholder='Описание' validate={[required]} />
                    </div>
                </div> 

                <div className={styles.newFaculty}>
                    <p className={styles.blockName}>Выберите факультет</p>
                    <div className={styles.inputs}>
                        <Field component='select' name='faculty' className={styles.newPostSelect} onChange={item => changeFaculty(item)} >
                            <option></option>
                            { props.faculties.map(item => <option key={item.id} value={item.id} > {item.facultyNameRu} </option>) }
                        </Field>
                    </div>
                </div>
                                
                {state.faculty
                    ? <div className={styles.newDep}>
                        <p className={styles.blockName}>Выберите департамент</p>
                        <div className={styles.inputs}>
                            <Field component='select' name='department' className={styles.newPostSelect}>
                                {state.department.map(item => <option key={item.id} value={item.id} > {item.dep_name_ru} </option>)}
                            </Field>
                        </div>
                    </div>
                    : null}
                <div className={styles.newCost}>
                    <p className={styles.blockName}>Цена <sup>*</sup></p>                
                    <div className={styles.inputs}>
                        <Field component={Input} name='cost' type='number' placeholder='Цена' validate={[required]} />
                    </div>
                </div> 
                { props.error && <div className={styles.successSubmit}>{ props.error }</div> }
                <div className={styles.submit}>
                    <button>Опубликовать</button>
                </div>
            </form>
        </div>  
    )
}

export default compose( withAuthRedirect, reduxForm({form: 'newPost'}) ) (NewPost);