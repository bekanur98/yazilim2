import React from 'react';
import styles from './TopPosts.module.css'
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IMAGES_URL } from '../../../constants';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

const TopPosts = (props) => {

    const { t } = useTranslation();
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const topPostsArray = [],
          postsWithRating = [];
          
    for (let i = 0; i < props.posts.length; i++) {
        if(props.posts[i].ratings.length){
            postsWithRating.push(props.posts[i])
        }
    }
    postsWithRating.sort((a, b) => b.ratings.rating - a.ratings.rating).map(p => {
        if (topPostsArray.length <= 9)
            topPostsArray.push(p);
    })
    // console.log(props.posts[0].ratings[0].rating, topPostsArray)
 
    return (
        <div className={styles.topPostsWrapper}>
            <h3>{t('postsTop')}</h3>

            <div className={styles.topPosts} >
                <Slider className={styles.slidersStyle} {...settings} >
                    {
                        topPostsArray.map(p => <NavLink to={`posts/${p.id}`}>
                            <div className={styles.topPostItem} key={p.id}>
                                <div className={styles.imgBlock}>
                                    {p.images
                                    ? p.images.length ?
                                        <img src={IMAGES_URL + p.images[0].url} alt="categoryIcon" />
                                        :
                                        <img src={require('../../../assets/images/logo.png')} alt="categoryIcon" />
                                    : <Preloader />
                                    }
                                </div>

                                <p className={styles.cost}> {p.cost != null ? p.cost + ' сом' : t('contract')}</p>
                                <p className={styles.postTitle}>{p.title}</p>
                            </div>
                        </NavLink>)
                    }

                </Slider>

            </div>
        </div>
    );
}

export default TopPosts;