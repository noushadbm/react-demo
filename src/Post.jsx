import React from 'react';
import Comment from './Comment';
import Footer from './Footer';

function Post() {
  const authors = ['Me', 'SomeOne', 'AnotherOne'];
  return (
    <div>
      <div>My first Post...!</div>
      {authors.map((item) => {
        return <Comment author={item} />;
      })}
      <Footer />
    </div>
  );
}

export default Post;
