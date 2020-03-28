import React from 'react';
import styles from './TopPosts.module.css'
import { useTranslation } from 'react-i18next';

const TopPosts = (props) => {
    const { t, i18 } = useTranslation();
    return (
        <div className={styles.topPostsWrapper}>
            <h3>{t('postsTop')}</h3> 
 
            <div className={styles.topPosts}>

                {
                    props.posts.map(tp => <div className={styles.topPost} key={tp.id}>
                        <p className={styles.postTitle}> {tp.title} </p>
                    </div>)
                }

            </div>
        </div>
    );
}


export default TopPosts;