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
    

    // cicle for top 10 posts 
    const topPostsArray = [];
    for (let i = 0; i <= 10; i++) {
        topPostsArray.sort((a, b) => b.rating - a.rating).push(props.posts[i])
    } 

 
    

    return (
        <div className={styles.topPostsWrapper}>
            <h3>{t('postsTop')}</h3>

            <div className={styles.topPosts} >
                <Slider className={styles.slidersStyle} {...settings} >
                    {
                        props.posts.map(p => <div className={styles.topPostItem} key={p.id}>
                            <div className={styles.imgBlock}>
                                {p.department ?
                                    <img src={require('../../../assets/images/' + p.department.faculty.id + '.png')} alt="categoryIcon" />
                                    :
                                    <img src={require('../../../assets/images/logo.png')} alt="categoryIcon" />
                                }
                            </div>

                            <p className={styles.cost}> {p.cost != null ? p.cost + ' сом' : t('contract')}</p>
                            <p className={styles.postTitle}>{p.title}</p>
                            <p> Рейтинг {p.rating} </p>
                        </div>)
                    }

                </Slider>

            </div>
        </div>
    );    
}

export default TopPosts;