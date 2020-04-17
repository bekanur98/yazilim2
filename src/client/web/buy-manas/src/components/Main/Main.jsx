import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from './Navbar/Navbar';
import TopPostsContainer from './TopPosts/TopPostsContainer';
import styles from './Main.module.css'
import LastPostsContainer from './LastPosts/LastPostsContainer';
import SearchedPostsContainer from './SearchedPosts/SearchedPostsContainer';
import { useEffect } from 'react';

const Main = (props) => {

    const searchedPost = useSelector(state => state.postsData.searchedPost) 
    console.log(searchedPost)

    return (

        <div className={styles.mainWrapper}>
            <Navbar />
            {searchedPost.length ?
                <SearchedPostsContainer/>
            :
                (
                    [
                        <TopPostsContainer />,
                        <LastPostsContainer />
                    ]
                )
            }
            
        </div>

    )
}

export default Main;