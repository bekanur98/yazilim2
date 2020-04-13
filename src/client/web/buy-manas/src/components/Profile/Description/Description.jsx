import React from 'react';
import styles from './Description.module.css';
import { useTranslation } from 'react-i18next';
import Modal from '../../common/Modal/Modal';

const Description = (props) => {
    const { t } = useTranslation();
    return (
        <div className={styles.descriptionWrapper}>
            {/* {props.isFetching ? <Prelodader /> : null} */}

            <img className={styles.avatar} src={require('../../../assets/images/avatar.jpg')} alt="avatar" />
            <div className={styles.about}>
                <div className={styles.names}>
                    <p className={styles.name}> {props.name} </p>
                    <p className={styles.username}> @{props.username} </p>
                </div>
                <div className={styles.iDontKnow}>
                    <div className={styles.faculty}> <img src={require('../../../assets/images/' + '5' + '.png')} alt="Faculty" /> </div>
                    <div className={styles.postLength}>
                        <p> {props.posters.length ? props.posters.length : 0 } </p>
                        <span> posts </span> 
                    </div>
                    <div className={styles.rating}>
                        <p> 10 </p>
                        <span> rating </span>
                    </div>
                </div>
            </div>
            <button className={styles.addPostBtn}> {t('Sell')} </button>
            <button className={styles.editProfile} onClick={props.toggleModalWindowEditProfile}> {t('editProfile')} </button>
            <div className={styles.phoneNumber}> {props.phone} </div>
            {
                props.isModalOpen &&
                <Modal onClose={props.toggleModalWindowEditProfile}>
                    <form action="GET">

                        <input type="text" placeholder={t('yourName')} value={props.name} />
                        <input type="text" placeholder={t('yourEmail')}  value={props.email} />
                        <input type="text" placeholder={t('yourUsername')} value={props.username} />
                        <select id="faculties" name="faculties">
                            <option value="volvo">Engineering</option>
                            <option value="volvo">Engineering</option>
                            <option value="volvo">Engineering</option>
                            <option value="volvo">Engineering</option>
                        </select>
                        <input type="phone" placeholder={t('yourNumber')} value={props.phone} />
                        <button> {t('saveChanges')} </button>
                    </form>
                </Modal>
            }

        </div>
    )
}

export default Description;