import React from 'react';
import styles from './FacultiesPosts.module.css'
import { useTranslation } from 'react-i18next';
import { IMAGES_URL } from '../../constants';
import { NavLink } from 'react-router-dom';

const FacultiesPosts = (props) => {
    const { t } = useTranslation();
    const LastPostsArray = [];
    props.posts.filter(p => p.department != null && p.department.faculty.id == props.match.params.facultyId)
        .sort((a, b) => {
            return new Date(b.publishedAt) - new Date(a.publishedAt);
        }).map(p => {
            LastPostsArray.push(p);
        });
    return (
        <div className={styles.facultyPostsWrapper}>
            <h3>ПОСТЫЫ</h3>

            <div className={styles.facultyPosts} >
                {
                    LastPostsArray.length
                        ? LastPostsArray.map(p => <NavLink to={`posts/${p.id}`}>
                            <div className={styles.facultyPostItem} key={p.id}>
                                <div className={styles.imgBlock}>
                                    {p.images.length ?
                                        <img src={IMAGES_URL + p.images[0].url} alt="categoryIcon" />
                                        :
                                        <img src={require('../../assets/images/logo.png')} alt="categoryIcon" />
                                    }
                                </div>
                                <div className={styles.descriptionBlock}>
                                    <p className={styles.postTitle}>{p.title}</p>
                                    <p className={styles.description}>{p.description}</p>
                                    <p className={styles.cost}> {p.cost != null ? p.cost + ' сом' : t('contract')}</p>

                                </div>

                            </div>
                        </NavLink>)
                        : <p className={styles.nullPosts}>Пока нет постов((</p>

                }
            </div>
        </div>
    )
}

export default FacultiesPosts