import React from 'react';
import styles from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const NewPost = (props) => {
    let date = new Date(); 
    const uploadImage = e => {
        if(e.target.files.length){
            props.newCurrentImage(e.target.files[0]);
        } else {
            return []
        }
    } 
    let submit = (value) => {
        let obj = {
            ...value,
            publishedAt: date,
            author: `api/users/${props.userId}`,
            rating: 0,
            images: props.image
        }

        props.newPostImage(obj)
    };

    return(
        <div className={styles.newPostWrapper}>
            <form onSubmit={props.handleSubmit(submit)}>
                <div className={styles.newImage}>
                    <p className={styles.blockName}>Загрузите фотографии</p>                
                    <div className={styles.inputs}><input onChange={uploadImage} type='file'/></div>
                </div>

                <div className={styles.newTitle}>
                    <p className={styles.blockName}>Название</p>                
                    <div className={styles.inputs}>
                        <Field component={Input} name='title' type='text' placeholder='Название' validate={[required]} />
                    </div>
                </div>

                <div className={styles.newDescr}>
                    <p className={styles.blockName}>Описание</p>                
                    <div className={styles.inputs}>
                        <Field component={Textarea} name='description' type='text' placeholder='Описание' validate={[required]} />
                    </div>
                </div>
{/* 
                <div className={styles.newDep}>
                    <p className={styles.blockName}>Категория</p>                
                    <div className={styles.inputs}>
                        <Field component={Input} name='department' type='text' placeholder='Описание' validate={[required]} />
                    </div>
                </div> */}

                <div className={styles.newCost}>
                    <p className={styles.blockName}>Цена</p>                
                    <div className={styles.inputs}>
                        <Field component={Input} name='cost' type='number' placeholder='Цена' validate={[required]} />
                    </div>
                </div> 

                <div className={styles.submit}>
                    <button>Опубликовать</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: 'newPost'})(NewPost);