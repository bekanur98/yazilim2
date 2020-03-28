import React from 'react';
import styles from './../Navbar.module.css'
import { useTranslation } from 'react-i18next';

const Categories = (props) => {
    const { t } = useTranslation();

    return (
        <div className={styles.categoriesBlock}>
            {
                props.faculties.map(f => <div className={styles.categoriesItem} key={f.id}>
                    <div className={styles.icon} ><img src={require('../../../assets/images/'+f.id+'.png')} alt="categoryIcon"/></div>
                    <p className={styles.facultyName}> {f.facultyNameKg} </p>
                </div>)
            }
            <div className={styles.categoriesItem}>
                <div className={styles.icon} ><img src={require('../../../assets/images/14.png')} alt="categoryIcon"/></div>
                 <p className={styles.facultyName}>{t('others')}</p> </div>
        </div>
    )
}

export default Categories;
