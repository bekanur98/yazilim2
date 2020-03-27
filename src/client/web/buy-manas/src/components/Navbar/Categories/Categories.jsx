import React from 'react';
import styles from './../Navbar.module.css'


const Categories = (props) => {

    console.log(props.state);

    return(
        <div className={styles.categoriesBlock}> 
        {
            props.faculties.map( f => <div key={f.id}>
                <p className={styles.facultyName}>{f.facultyNameKg}</p>
            </div> )
        }
        </div>
    )
}

export default Categories;
