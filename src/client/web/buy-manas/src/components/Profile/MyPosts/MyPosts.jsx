import React from 'react';
import styles from './MyPosts.module.css';
import { useTranslation } from 'react-i18next';
import { IMAGES_URL } from '../../../constants';


const MyPosts = (props) => {
    const { t } = useTranslation();
    return (
        <div className={styles.myPostsWrapper}>
            <h3>Мои посты</h3>
            <div className={styles.myPosts}>
                { 
                    props.posts.map(tp => <div className={styles.myPostItem} key={tp.id}>
                        <div className={styles.imgBlock}> 
                            {tp.images.length ?  
                                <img src={IMAGES_URL + tp.images[0].url} alt="categoryIcon" />
                                :
                                <img src={require('../../../assets/images/logo.png')} alt="categoryIcon" />
                            }
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