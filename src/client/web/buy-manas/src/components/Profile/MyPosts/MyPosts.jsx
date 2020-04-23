import React, { useState } from 'react';
import styles from './MyPosts.module.css';
import { IMAGES_URL } from '../../../constants';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';


const MyPosts = (props) => {



    const LastPostsArray = [];

    props.posts.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    }).map(p => {
        LastPostsArray.push(p);
    });
    if (props.isFetching) {
        return <Preloader />
    }
    return (
        <div className={styles.myPostsWrapper}>
            <h3>Мои посты</h3>
            <div className={styles.myPosts}>

                {LastPostsArray.length
                    ? LastPostsArray.map(l => <NavLink to={`posts/${l.id}`}>
                        <div className={styles.myPostItem} key={l.id}>
                            <div className={styles.imgBlock}>
                                {l.images.length
                                    ? <img src={IMAGES_URL + l.images[0].url} alt="categoryIcon" />
                                    : <img src={require('../../../assets/images/logo.png')} alt="categoryIcon" />
                                }
                            </div>
                            <p className={styles.postTitle}>{l.title}</p>
                        </div>
                    </NavLink>)
                    : <p className={styles.nullPosts}>Пока нет постов((</p>
                }
            </div>
        </div>
    )
}

export default MyPosts;