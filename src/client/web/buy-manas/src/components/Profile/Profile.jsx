import React from 'react';
import styles from './Profile.module.css';
import DescriptionContainer from './Description/DescriptionContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return(
        <div className={styles.profileWrapper}>
            <DescriptionContainer />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;