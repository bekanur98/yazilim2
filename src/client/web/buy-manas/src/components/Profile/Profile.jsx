import React from 'react';
import styles from './Profile.module.css';
import DescriptionContainer from './Description/DescriptionContainer';

const Profile = (props) => {
    return(
        <div className={styles.profileWrapper}>
            <DescriptionContainer />
        </div>
    )
}

export default Profile;