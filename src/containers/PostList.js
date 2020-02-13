import React from "react";
import { connect } from "react-redux";
import Post from "../components/NewPost";
//import { createPost } from "../actions/Index";

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => {
        return <Post post={post} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: id => {
//       dispatch(deletePost(id));
//     }
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(PostList);
