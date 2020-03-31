import React from 'react';
import Navbar from './Navbar/Navbar';
import TopPostsContainer from './TopPosts/TopPostsContainer';
import styles from './Main.module.css'

const Main = (props) => {
    return (

        <div className={styles.mainWrapper}>
            <Navbar />
            <TopPostsContainer />
        </div>

    )
}

export default Main;