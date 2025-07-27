import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  loadPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('Something went wrong in Posts component!');
    console.error('Error caught:', error, info);
  }

  
  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
