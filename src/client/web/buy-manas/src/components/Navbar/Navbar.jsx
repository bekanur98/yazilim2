import React from 'react';
import styles from './Navbar.module.css'
import { useTranslation } from 'react-i18next';
import CategoriesContainer from './Categories/CategoriesContainer';

const Navbar = (props) => {
    const { t } = useTranslation();


    return(
        <div className={styles.navbarWrapper}>
            <div className={styles.search}>
                <input type="search" placeholder={t('searchPlaceHolder')}/>
                <button>{t('searchButton')}</button>
            </div>
            <CategoriesContainer />
        </div>
    )
}

export default Navbar;
