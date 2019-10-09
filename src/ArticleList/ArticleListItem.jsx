import React from 'react'
import PropTypes from 'prop-types'

const ArticleListItem = props => {

    return (
     <li>
          <div className={props.title}>
              <h3>{props.title}</h3>
              {props.shortText}<br /><br />
              <time dateTime={props.pubDate}>{props.pubDate}</time>
              <button onClick={()=> alert(props.slug)}>show article slug</button>
          </div>
      </li>


    );
  };

  ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
  };

  export default ArticleListItem;