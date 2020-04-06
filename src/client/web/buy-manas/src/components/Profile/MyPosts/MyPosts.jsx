import React from 'react';
import styles from './MyPosts.module.css';
import { useTranslation } from 'react-i18next';


const MyPosts = (props) => {
    const { t } = useTranslation();
    const apiUrl = 'http://buymanasapi.ru.xsph.ru';
    return (
        <div className={styles.myPostsWrapper}>
            <h3>Мои посты</h3>
            <div className={styles.myPosts}>
                { 
                    props.posts.map(tp => <div className={styles.myPostItem} key={tp.id}>
                        <div className={styles.imgBlock}> 
                            <img src={'http://buymanasapi.ru.xsph.ru' + tp.images.url} alt="categoryIcon" />
                        </div>
                        <p className={styles.cost}>Цена: {tp.cost != null ? tp.cost + ' сом' : t('contract')}</p>
                        <p className={styles.postTitle}>{tp.title}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default MyPosts;