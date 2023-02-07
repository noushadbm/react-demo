import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  likeIncrement = () => {
    console.log('Increment...');
    var value = this.state.likes;
    this.setState({
      likes: ++value,
    });
  };

  likeDecrement = () => {
    var value = this.state.likes;
    this.setState({
      likes: --value,
    });
  };

  render() {
    return (
      <>
        <div>
          This is from comment. Author:{' '}
          {this.props.auther ? this.props.auther : 'None'}
        </div>
        <div>
          Likes: {this.state.likes}{' '}
          <span onClick={this.likeIncrement} style={{ color: 'red', cursor: 'pointer' }}>
            &hearts;
          </span>
        </div>
        <button onClick={this.likeDecrement}>Decrment</button>
      </>
    );
  }
}

export default Comment;
