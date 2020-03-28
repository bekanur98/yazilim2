import React from 'react';
import styles from './Header.module.css';
import logo from './../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';


const Header = (props) => {
    const { t, i18n } = useTranslation();
    function changeLang(lang = 'ky') {
        i18n.changeLanguage(lang)
    }

    return (
        <div className={styles.appHeader}>

            <div className={styles.logoBlock}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.slogan}>
                    <p style={{color:'#174b81', fontSize:18}}>Buy-Manas</p>
                    <p style={{color:'#174b81', fontSize:18}}>{t('logo_text')}</p>
            </div>
            <div>
                <button className={styles.auth}> {t('auth')}</button>
                <div className={styles.changeLangBlock}>
                    <button onClick={() => changeLang('ky')}>KG</button>
                    <button onClick={() => changeLang('ru')}>RU</button>
                    <button onClick={() => changeLang('tr')}>TR</button>
                    <button onClick={() => changeLang('en')}>EN</button>
                </div>
            </div>
        </div>
    )
}

export default Header;