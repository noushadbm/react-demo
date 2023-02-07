import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  likeIncrement = () => {
    //console.log('Increment...');
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

  componentDidMount() {
    console.log('Mount');
    fetch('https://randomuser.me/api/')
      .then((resp) => resp.json())
      .then(({ results }) => {
        this.setState({ person: results[0] });
        console.log(results[0]);
      });
  }

  render() {
    return (
      <div className="comment-card">
        <div>
          This is from comment. Author:{' '}
          {this.props.author ? this.props.author : 'None'}
        </div>
        <div>
          Likes: {this.state.likes}{' '}
          <span
            onClick={this.likeIncrement}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            &hearts;
          </span>
        </div>
        <button onClick={this.likeDecrement}>Decrment</button>
      </div>
    );
  }
}

export default Comment;
