import React from 'react';
import Navbar from './Navbar/Navbar';
import TopPostsContainer from './TopPosts/TopPostsContainer';
import styles from './Main.module.css'
import LastPostsContainer from './LastPosts/LastPostsContainer';

const Main = (props) => {
    return (

        <div className={styles.mainWrapper}>
            <Navbar />
            <TopPostsContainer />
            <LastPostsContainer />
        </div>

    )
}

export default Main;