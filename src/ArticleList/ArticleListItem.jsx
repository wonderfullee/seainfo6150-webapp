import React from 'react'
import SlugButton from './SlugButton'
import ArticleImage from './ArticleImage'
import styles from './ArticleListItem.module.css';


const ArticleListItem = props => {

    return (

      <li className={styles.container}>
          <div className={styles.image}>
            <ArticleImage 
              url={props.url}
              title={props.title}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>{props.title}</div><br />
            <div className={styles.shortText}>{props.shortText}</div><br />
            <div className={styles.box}><br />
            <div className={styles.date}><time dateTime={props.pubDate}>{props.pubDate}</time></div>

            <SlugButton 
              buttonText={props.author}
              slug={props.slug}
            />
          </div>
          </div>
      </li>


    );
  };



  export default ArticleListItem;