import React from 'react';
import styles from './Header.module.css';
import logo from './../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Modal from '../common/Modal/Modal';
import { reduxForm, Field } from 'redux-form';
import * as axios from 'axios';
import { API_URL } from '../../constants';

const LoginForm = (props) => {
    
    const { t, i18n } = useTranslation(); 
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='input' type="text" placeholder={t('yourUsername')} name='username'/>
            <Field component='input' type="password" placeholder={t('password')} name='logPassword' />
            <p className={styles.forgotPass}>{t('forgotPassword')}</p>
            <button> {t('login')} </button>
            <p className={styles.signUp}>
                {t('or ')} 
                <span className={styles.clickableLink} onClick={props.toggleModalLoginAuth}>
                    {t('signUp')}
                </span>
            </p>
            <p className={styles.withWord}>{t('with')}</p>
            <p className={styles.withSocialNet}>
                <a href="https://facebook.com">F</a>
                <a href="https://twitter.com">T</a>
                <a href="https://google.com">G</a>
            </p>
        </form>
    )
}

const RegisterForm = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='input' type="text" placeholder={t('yourUsername')} name='username' />
            <Field component='input' type="text" placeholder={t('yourEmail')} name='email' />
            <Field component='input' type="phone" placeholder={t('yourNumber')} name='number' />
            <Field component='input' type="password" placeholder={t('password')} name='regPassword' />
            <Field component='input' type="password" placeholder={t('password')} name='confirmPassword' />
            <button> {t('signUp')} </button>
            <p className={styles.signUp}>
                Есть аккаунт?
                <span className={styles.clickableLink} onClick={props.toggleModalLoginAuth}>
                    Вход
                </span>
            </p>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
const RegisterReduxForm = reduxForm({ form: 'register' })(RegisterForm);



const Header = (props) => {
    const { t, i18n } = useTranslation();
    function changeLang(lang = 'kg') {
        i18n.changeLanguage(lang)
    } 
    
    const onSubmit = (formData) =>{
        props.login(formData.username, formData.logPassword)
        
        axios.get(`${API_URL}users`,{params:{'username':formData.username}})
        .then(r=> {
            if(r.data.length){
                console.log('hi')
            }
            else{
                axios.post(`${API_URL}users`,{
                        "username": formData.username,
                        "password": formData.regPassword,
                        "name": 'test',
                        "email": formData.email,
                        "phone": formData.number,
                        
                })
                .then(r => console.log(r.data))
                .catch(e=> console.log(e))
            }
        })
        

    }

    return (
        <div className={styles.appHeader}>

            <div className={styles.logoBlock}>
                <NavLink to='/'> <img src={logo} alt="logo" /></NavLink>
                <div className={styles.slogan}>
                    <p>Buy-Manas</p>
                    <p>{t('logo_text')}</p>
                </div>
            </div>
            <div>
                <button className={styles.auth} onClick={props.toggleModalWindowAuth}>{t('auth')}</button>
                <NavLink to='/profile'> Profile(Test) </NavLink>

                <div className={styles.changeLangBlock}>
                    <label> <input type="radio" name="a1" onClick={() => changeLang('kg')} /> <span>KG</span> </label>
                    <label> <input type="radio" name="a1" onClick={() => changeLang('ru')} /> <span>RU</span> </label>
                    <label> <input type="radio" name="a1" onClick={() => changeLang('tr')} /> <span>TR</span> </label>
                    <label> <input type="radio" name="a1" onClick={() => changeLang('en')} /> <span>EN</span> </label>
                </div>
            </div>

            {
                props.isModalOpen &&
                <Modal onClose={props.toggleModalWindowAuth}>
                    {
                        props.wannaLogin ?
                            <LoginReduxForm toggleModalLoginAuth={props.toggleModalLoginAuth} onSubmit={onSubmit} />
                            :
                            <RegisterReduxForm toggleModalLoginAuth={props.toggleModalLoginAuth} onSubmit={onSubmit} />
                    }
                </Modal>
            }
        </div>
    )
}

export default Header;