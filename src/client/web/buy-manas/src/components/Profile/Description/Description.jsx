import React from 'react';
import styles from './Description.module.css';

const Description = (props) => {
    return(
        <div className={styles.descriptionWrapper}> 
            <img className={styles.avatar} src={require('../../../assets/images/avatar.jpg')} alt="avatar"/> 
            <div className={styles.about}>
                <div className={styles.names}>
                    <p className={styles.name}> name </p>
                    <p className={styles.username}> username </p>
                </div>
                <div className={styles.iDontKnow}>
                    <div className={styles.faculty}> engineering </div>
                    <div className={styles.postLength}> 5 </div>
                    <div className={styles.rating}> 10 </div>
                </div>
            </div>
            <div className={styles.addPostBtn}> Подать объявление </div>
            <div className={styles.editProfile}> Изменить профиль </div>
            <div className={styles.phoneNumber}> +996 555 555 555 </div>
        </div>
    )
}

export default Description;