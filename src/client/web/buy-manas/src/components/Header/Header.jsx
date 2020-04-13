import React from 'react';
import styles from './Header.module.css';
import logo from './../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Modal from '../common/Modal/Modal';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    
    const { t } = useTranslation(); 
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
    const { t } = useTranslation();
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
    
    const onRegisterSubmit = (formData) =>{
        props.register(formData)
    }
    const onLoginSubmit = (formData) =>{
        props.login(formData)
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

                {props.isAuth 
                    ? <div><NavLink to='/profile'> Profile(Test) </NavLink> - <button onClick={props.logout}>logout</button></div>
                    : <button className={styles.auth} onClick={props.toggleModalWindowAuth}>{t('auth')}</button>
                }
                
                

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
                            <LoginReduxForm toggleModalLoginAuth={props.toggleModalLoginAuth} onSubmit={onLoginSubmit} />
                            :
                            <RegisterReduxForm toggleModalLoginAuth={props.toggleModalLoginAuth} onSubmit={onRegisterSubmit} />
                    }
                </Modal>
            }
        </div>
    )
}

export default Header;