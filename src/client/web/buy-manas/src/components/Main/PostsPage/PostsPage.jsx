import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './PostsPage.module.css';
import { IMAGES_URL } from '../../../constants';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';

const PostsPage = (props) => {
    const { t } = useTranslation();

    const p = props.post;

    if (!p) {
        return <Preloader />
    }
    let date = new Date();
    let submit = (value) => {
        let obj = {
            ...value,
            publishedAt: date,
            author: `/api/users/${props.userId}`,
            poster: `/api/posters/${props.postId}`
        }
        props.newComment(obj)
    }
    return (
        <div className={styles.postWrapper}>
            <div className={styles.forFlexDisplay}>
                <div className={styles.aboutPost}>
                    <h2>{p.title}</h2>
                    <div className={styles.postImg + ' ' + (p.images[0] !== undefined ? styles.noneBorder : '')}>
                        {p.images[0] !== undefined
                            ? <img src={IMAGES_URL + p.images[0].url} alt="Post image" />
                            : <p>Нет фотографии</p>}
                    </div>
                    <div>
                        <p>Дата публикации: {p.publishedAt}</p>
                        <p>Рейтинг: {p.rating}</p>
                        <p className={styles.cost}>Цена: {p.cost != null ? p.cost + ' сом' : t('contract')}</p>
                    </div>
                    <div className={styles.descrBlock}>
                        <p className={styles.descrItem}>{p.description}</p>
                    </div>

                    <hr />



                </div>

                <div className={styles.aboutAuthor}>
                    <h3>Автор</h3>
                    <p className={styles.username}>{p.author.username}</p>
                    <p className={styles.phone}>{p.author.phone}</p>
                    <div className={styles.authorsFaculty}>
                        {p.department !== null
                            ? <NavLink to={`/facultiesPosts/${p.department.faculty.id}`}><img src={require(`../../../assets/images/${p.department.faculty.id}.png`)} alt="Faculty" /></NavLink>
                            : <p>Факультет не определен</p>}
                    </div>
                </div>
            </div>


            <div className={styles.commentsBlock}>
                <h2>Комментарии</h2>
                <div className={styles.comments}>
                    <div className={styles.newComment}>
                        <form onSubmit={props.handleSubmit(submit)}>
                            {props.isAuth 
                                ? <><Field component={Input} name='newComment' type='text' placeholder='Ваш Комментарий' /><button>Отправить</button></>
                                : <p className={styles.blockComment}>Зарегистрируйтесь или войдите, чтобы оставить комментарий</p>
                            }
                            
                        </form>
                    </div>
                    <div className={styles.commentsOfPost}>
                        {p.comments &&
                            props.comments.sort((a, b) => {
                                return new Date(b.publishedAt) - new Date(a.publishedAt);
                            }).map(p => <div className={styles.commentItem} >
                                <div className={styles.author}>{p.author.username} <span className={styles.publishedAt}>{p.publishedAt}</span></div>
                                <div className={styles.content}>{p.content}</div>

                            </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default reduxForm({ form: 'comments' })(PostsPage)