import React from 'react';
import styles from './Header.module.css';
import logo from './../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Modal from '../common/Modal/Modal';


// let topPostsArray = [];

// for(let i = 1;i < 10; i++){
//     topPostsArray.sort((a, b) => b.rating - a.rating).push(props.posts[i])
// }


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
                        props.isLogin ?
                            <form action="GET">
                                <input type="text" placeholder={t('yourUsername')} />
                                <input type="password" placeholder={t('password')} />
                                <p className={styles.forgotPass}>{t('forgotPassword')}</p>
                                <button> {t('login')} </button>
                                <p className={styles.signUp}>{t('or')} <span className={styles.clickableLink} onClick={props.toggleModalLoginAuth}>{t('signUp')}</span></p>
                                <p className={styles.withWord}>{t('with')}</p>
                                <p className={styles.withSocialNet}>
                                    <a href="https://facebook.com">F</a>
                                    <a href="https://twitter.com">T</a>
                                    <a href="https://google.com">G</a>
                                </p>
                            </form>
                            :
                            <form action="GET">
                                <input type="text" placeholder={t('yourUsername')} />

                                <input type="text" placeholder={t('yourEmail')} />
                                <input type="phone" placeholder={t('yourNumber')} />
                                <input type="password" placeholder={t('password')} />
                                <input type="password" placeholder={t('password')} />
                                <button> {t('signUp')} </button>
                                <p className={styles.signUp}>Есть аккаунт? <span className={styles.clickableLink} onClick={props.toggleModalLoginAuth}> Вход </span> </p>
                            </form>
                    }

                </Modal>
            }
        </div>
    )
}

export default Header;