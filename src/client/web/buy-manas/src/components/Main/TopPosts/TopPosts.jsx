import React from 'react';
import styles from './TopPosts.module.css'
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IMAGES_URL } from '../../../constants';

const TopPosts = (props) => { 

    const { t } = useTranslation();
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    
    const topPostsArray = [];
    props.posts.sort((a,b)=>b.rating - a.rating).map(p=>{
        if(topPostsArray.length<=9)
        topPostsArray.push(p);
    }) 

    return (
        <div className={styles.topPostsWrapper}>
            <h3>{t('postsTop')}</h3>

            <div className={styles.topPosts} >
                <Slider className={styles.slidersStyle} {...settings} >
                    {
                        topPostsArray.map(p => <div className={styles.topPostItem} key={p.id}>
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

export default TopPosts;