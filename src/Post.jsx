import React from 'react';
import Comment from './Comment';

function Post() {
  const authors = ['Me', 'SomeOne', 'AnotherOne'];
  return (
    <div>
      <div>My first Post...!</div>
      {authors.map((item) => {
        return <Comment author={item} />;
      })}
    </div>
  );
}

export default Post;
