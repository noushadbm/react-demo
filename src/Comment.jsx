import React from 'react';

class Comment extends React.Component {
  render() {
    return <>
      <div>This is from comment. Author: {this.props.auther? this.props.auther:"None"}</div>
    </>;
  }
}

export default Comment;