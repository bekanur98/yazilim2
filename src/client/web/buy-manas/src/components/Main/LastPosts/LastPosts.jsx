import React from 'react';
import styles from './LastPosts.module.css'
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IMAGES_URL } from '../../../constants';

const LastPosts = (props) => {

    const { t } = useTranslation();
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };


    // cicle for top 10 posts 
    const LastPostsArray = [];
    props.posts.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    }).map(p=>{
        if(LastPostsArray.length<=9)
        LastPostsArray.push(p);
    });




    return (
        <div className={styles.LastPostsWrapper}>
            <h3>{t('postsLast')}</h3>

            <div className={styles.lastPosts} >
                <Slider className={styles.slidersStyle} {...settings} >
                    {
                        LastPostsArray.map(p => <div className={styles.lastPostItem} key={p.id}>
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
                    }

                </Slider>

            </div>
        </div>
    );
}

export default LastPosts;