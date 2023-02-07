import React from 'react';
import Comment from './Comment';

function Post() {
  return (
    <div>
      <div>My first Post...!</div>
      <Comment author="Me" />
      <Comment author="SomeOne"/>
    </div>
  );
}

export default Post;
