import React from 'react';
import styles from './MyPosts.module.css';
import { useTranslation } from 'react-i18next';
import { IMAGES_URL } from '../../../constants';


const MyPosts = (props) => {
    const { t } = useTranslation();

    const LastPostsArray = [];
    props.posts.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    }).map(p => {
        LastPostsArray.push(p);
    });
    return (
        <div className={styles.myPostsWrapper}>
            <h3>Мои посты</h3>
            <div className={styles.myPosts}>

            {
                    LastPostsArray.length 
                        ? LastPostsArray.map(p => <div className={styles.myPostItem} key={p.id}>
                            <div className={styles.imgBlock}>
                                {p.images.length ?
                                    <img src={IMAGES_URL + p.images[0].url} alt="categoryIcon" />
                                    :
                                    <img src={require('../../../assets/images/logo.png')} alt="categoryIcon" />
                                }
                            </div>

                            <p className={styles.cost}> {p.cost != null ? p.cost + ' сом' : t('contract')}</p>
                            <p className={styles.postTitle}>{p.title}</p>
                        </div>)
                        : <p className={styles.nullPosts}>Пока нет постов((</p>
                         
                }
            </div>
        </div>
    )
}

export default MyPosts;