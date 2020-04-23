import React from 'react';
import styles from './Description.module.css';
import { useTranslation } from 'react-i18next';
import Modal from '../../common/Modal/Modal';
import { getLocale } from '../../../i18next';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input, Phone } from '../../common/FormsControls/FormsControls';
import { emailValid, } from '../../../utils/validators/validators'
import { IMAGES_URL } from '../../../constants';
import Preloader from '../../common/Preloader/Preloader';

const Description = (props) => {
    const { t } = useTranslation();
    const facultyName = 'facultyName' + getLocale().charAt(0).toUpperCase() + getLocale().slice(1); 
    const uploadImage = e => {
        if(e.target.files.length){
            props.newAvatar(e.target.files[0]);
        }  
    } 
    const submit = (values) => {
        let obj = { 
            name: values.name ? values.name :  props.name,
            email: values.email ? values.email :  props.email,
            phone: values.phone && values.phone !== '+996' ? values.phone :  props.phone,
            faculty: values.faculty ? `/api/faculties/${values.faculty}` :  `/api/faculties/${props.faculty.id}`,
            avatar: props.avatar
        }
        props.editProfile(props.id, obj); 
    }
    if(!props.faculty || !props.myAvatar || !props.username || !props.name){
        return <Preloader />
    }
    return (
        <div className={styles.descriptionWrapper}>
            <div className={styles.avatarBlock}>
                {props.myAvatar[0]
                    ? <img className={styles.avatar} src={IMAGES_URL + props.myAvatar[0].url} alt="avatar" />
                    : <img className={styles.avatar} src={require('../../../assets/images/avatar.jpg')} alt="avatar" />
                }    
            </div>
            <div className={styles.about}>
                <div className={styles.names}>
                    <p className={styles.name}> {props.name} </p>
                    <p className={styles.username}> @{props.username} </p>
                </div>
                <div className={styles.iDontKnow}>
                    <div className={styles.faculty}><img src={require(`../../../assets/images/${props.faculty.id}.png`)} alt="Faculty" /> </div>
                    <div className={styles.postLength}>
                        <p> {props.posters.length ? props.posters.length : 0 } </p>
                        <span> posts </span> 
                    </div>
                    <div className={styles.rating}>
                        <p> 10 </p>
                        <span> rating </span>
                    </div>
                </div>
            </div>
            <NavLink to={'/newPost'}> <button className={styles.addPostBtn}> {t('Sell')} </button></NavLink>
            <button className={styles.editProfile} onClick={props.toggleModalWindowEditProfile}> {t('editProfile')} </button>
            <div className={styles.phoneNumber}> {props.phone} </div>
            {
                props.isModalOpen &&
                <Modal onClose={props.toggleModalWindowEditProfile}>
                    <form onSubmit={props.handleSubmit(submit)}>
                        <Field component={Input} name="name" type="text" placeholder={t('yourName')} value={props.name}/>
                        <Field component={Input} name="email" type="text" placeholder={t('yourEmail')}  value={props.email} validate={[emailValid]}/>
                        <Field component='select' name="faculty" className={styles.editFaculty} id="faculties">
                            <option></option>
                            {props.faculties.map(f => <option key={f.id} value={f.id}>{f[facultyName]}</option>)}
                        </Field>
                        <Field component={Phone} name='phone' type="phone" placeholder={t('yourNumber')} value={props.phone} />
                        <div className={styles.newAvatar}>Аватар<input onChange={uploadImage} type="file" placeholder='Выберите изображение'/></div>
                        <button> {t('saveChanges')} </button>
                        { props.error && <div className={styles.successSubmit}>{ props.error }</div> }
                    </form>
                </Modal>
            }

        </div>
    )
}

export default reduxForm({form: 'editProfile'})(Description);