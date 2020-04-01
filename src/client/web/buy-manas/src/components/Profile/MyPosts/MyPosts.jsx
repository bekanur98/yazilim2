import React from 'react';
import styles from './MyPosts.module.css';
import { useTranslation } from 'react-i18next';


const MyPosts = (props) => {
    const { t } = useTranslation();
    debugger

    return (
        <div className={styles.myPostsWrapper}>
            {
                props.posts.map(tp => <div className={styles.myPostItem} key={tp.id}>
                    <div className={styles.imgBlock}>
                        {/* {tp.department ?
                            <img src={require('../../../../assets/images/' + tp.department.faculty.id + '.png')} alt="categoryIcon" />
                            :
                            <img src={require('../../../../assets/images/logo.png')} alt="categoryIcon" />
                        } */}
                    </div>

                    <p className={styles.cost}> {tp.cost != null ? tp.cost + ' сом' : t('contract')}</p>
                    <p className={styles.postTitle}>{tp.title}</p>
                    <p> Рейтинг {tp.rating} </p>
                </div>)
            }
        </div>
    )
}

export default MyPosts;