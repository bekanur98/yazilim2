import React from 'react';
import styles from './Description.module.css';
import { useTranslation } from 'react-i18next';
import Modal from '../../Modal/Modal';

const Description = (props) => {
    const { t } = useTranslation();

    return (
        <div className={styles.descriptionWrapper}>
            <img className={styles.avatar} src={require('../../../assets/images/avatar.jpg')} alt="avatar" />
            <div className={styles.about}>
                <div className={styles.names}>
                    <p className={styles.name}> {props.name} </p>
                    <p className={styles.username}> @{props.username} </p>
                </div>
                <div className={styles.iDontKnow}>
                    <div className={styles.faculty}> faculty </div>
                    <div className={styles.postLength}> posters.length </div>
                    <div className={styles.rating}> rating </div>
                </div>
            </div>
            <button className={styles.addPostBtn}> {t('Sell')} </button>
            <button className={styles.editProfile} onClick={props.toggleModal}> {t('editProfile')} </button>
            <div className={styles.phoneNumber}> props.phone </div>
            {
                props.isModalOpen &&
                <Modal onClose={props.toggleModal}>
                    <form action="GET">
                        
                        <input type="text" placeholder={t('yourName')} />
                        <input type="text" placeholder={t('yourEmail')} />
                        <input type="text" placeholder={t('yourUsername')} />
                        <select id="faculties" name="faculties">
                            <option value="volvo">Engineering</option> 
                            <option value="volvo">Engineering</option> 
                            <option value="volvo">Engineering</option> 
                            <option value="volvo">Engineering</option> 
                        </select>
                        <input type="phone" placeholder={t('yourNumber')} />
                        <button> {t('saveChanges')} </button>
                    </form>
                </Modal>
            }

        </div>
    )
}

export default Description;