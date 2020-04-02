import React from 'react';
import styles from './TopPosts.module.css'
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopPosts = (props) => {
    const { t } = useTranslation();
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };



    return (
        <div className={styles.topPostsWrapper}>
            <h3>{t('postsTop')}</h3>

            <div className={styles.topPosts} >
                <Slider className={styles.slidersStyle} {...settings} >
                    {
                        props.posts.sort((a, b) => b.rating - a.rating)
                            .map(tp => <div className={styles.topPostItem} key={tp.id}>
                                <div className={styles.imgBlock}>
                                    {tp.department ?
                                        <img src={require('../../../assets/images/' + tp.department.faculty.id + '.png')} alt="categoryIcon" />
                                        :
                                        <img src={require('../../../assets/images/logo.png')} alt="categoryIcon" />
                                    }
                                </div>

                                <p className={styles.cost}> {tp.cost != null ? tp.cost + ' сом' : t('contract')}</p>
                                <p className={styles.postTitle}>{tp.title}</p>
                                <p> Рейтинг {tp.rating} </p>
                            </div>)
                    }
                </Slider>

            </div>
        </div>
    );
}


export default TopPosts;