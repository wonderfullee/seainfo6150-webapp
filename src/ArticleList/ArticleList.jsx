import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'
import styles from "./ArticleList.module.css"
/*
 * Name:Zhihao Li
 * NUID: 001898687 
*/
const ArticleList = props => {
  return (
    <ul >
      <div className={styles.list}>
        {props.articles.map(article => (
          <ArticleListItem
          url={article.image._url}
          title={article.title}
          shortText={article.shortText}
          pubDate={article.pubDate}
          slug={article.slug}
          author={article.author}
          />
        ))}
      </div>
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
