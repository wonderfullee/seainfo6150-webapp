import React from "react";
import styles from './ArticleImage.module.css';

const ArticleImage = props =>{
    return (
        <img className={styles.img} src= {props.url} alt={props.title} />
    );

};
export default ArticleImage;