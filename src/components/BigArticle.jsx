import React from 'react';

function BigArticle({ heading, content }) {
  return (
    <>
      <article className="big-article article">
        <h3 className="article-heading">{heading}</h3>
        <div className="underline"></div>
        <br />
        {content}
      </article>
    </>
  );
}

export default BigArticle;
