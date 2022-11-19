import React, { useState } from 'react';

function MiniArticle({ heading, content }) {
  return (
    <>
      <article className="mini-article article">
        <h3 className="article-heading">{heading}</h3>
        <div className="underline"></div>
        {content}
      </article>
    </>
  );
}

export default MiniArticle;
