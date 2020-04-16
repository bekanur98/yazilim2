import React from 'react';
import styles from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const NewPost = (props) => {
    return(
        <div className={styles.newPostWrapper}>
            <form onSubmit={props.handleSubmti}>
                <div className={styles.newImage}>
                    <p className={styles.blockName}>Загрузите фотографии</p>                
                    <div className={styles.inputs}></div>
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
                        <Field component={Input} name='description' type='text' placeholder='Описание' validate={[required]} />
                    </div>
                </div>

                <div className={styles.newCost}>
                    <p className={styles.blockName}>Цена</p>                
                    <div className={styles.inputs}>
                        <Field component={Input} name='cost' type='text' placeholder='Цена' validate={[required]} />
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