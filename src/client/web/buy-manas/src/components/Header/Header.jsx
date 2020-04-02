import React from 'react';
import styles from './Header.module.css';
import logo from './../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';


const Header = (props) => {
    const { t, i18n } = useTranslation();
    function changeLang(lang = 'kg') {
        i18n.changeLanguage(lang)
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
                <button className={styles.auth} onClick={props.toggleModal}>{t('auth')}</button>
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
                <Modal onClose={props.toggleModal}>
                    <form action="GET">
                        
                        <input type="text" placeholder={t('yourName')} />
                        <input type="text" placeholder={t('yourEmail')} />
                        <input type="text" placeholder={t('yourUsername')} /> 
                        <input type="phone" placeholder={t('yourNumber')} />
                        <input type="password" placeholder={t('password')} />
                        <button> {t('signUp')} </button>
                    </form>
                </Modal>
            }
        </div>
    )
}

export default Header;