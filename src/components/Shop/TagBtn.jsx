import React from 'react';

function TagBtn({ handleTagsArr, setIsTag, isTag, tag }) {
  return (
    <button
      className={isTag ? ' tag selected-tag' : ' tag'}
      onClick={() => {
        handleTagsArr(tag);
        setIsTag(!isTag);
      }}
    >
      {tag}
    </button>
  );
}

export default TagBtn;
