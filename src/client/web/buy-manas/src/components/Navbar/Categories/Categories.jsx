import React from 'react';
import styles from './../Navbar.module.css'
import { useTranslation } from 'react-i18next';
import categoryIcon from './../../../assets/images/categoryIcon.png'


const Categories = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.categoriesBlock}>
            {
                props.faculties.map(f => <div className={styles.categoriesItem} key={f.id}>
                    <div className={styles.icon} ><img src={categoryIcon} alt="categoryIcon"/></div>
                    <p className={styles.facultyName}> {f.facultyNameKg} </p>
                </div>)
            }
            <div className={styles.categoriesItem}>
                <div className={styles.icon} ><img src={categoryIcon} alt="categoryIcon"/></div>
                 <p>{t('postsTop')}</p> </div>
        </div>
    )
}

export default Categories;
