import React from 'react';
import styles from './TopPosts.module.css'
import { useTranslation } from 'react-i18next';

const TopPosts = (props) => {
    const { t } = useTranslation();
    return (
        <div className={styles.topPostsWrapper}>
            <h3>{t('postsTop')}</h3>

            <div className={styles.topPosts} onMouseOver={() => console.log('clicked')}>

                {
                    props.posts.map(tp => <div className={styles.topPostItem} key={tp.id}>
                        {tp.department ?
                            <img src={require('../../assets/images/' + tp.department.faculty.id + '.png')} alt="categoryIcon" />
                            :
                            <img src={require('../../assets/images/logo.png')} alt="categoryIcon" />
                        }

                        <p className={styles.cost}> {tp.cost != null ? tp.cost + ' сом' : 'Договорная'}</p>
                        <p className={styles.postTitle}>{tp.title}</p>

                    </div>)
                }
            </div>
        </div>
    );
}


export default TopPosts;