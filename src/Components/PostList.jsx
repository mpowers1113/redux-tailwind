import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUsers } from '../actions';
import UserDetails from './UserDetails';

const PostList = (props) => {
  useEffect(() => {
    props.fetchPostAndUsers();
  }, []);

  const renderList = () => {
    return props.posts.map((post) => {
      return (
        <>
          <div
            key={post.id}
            className="border-solid  space-y-4 border-black rounded border-2 flex flex-col justify-center items-start p-4 m-2">
            <h1 className="uppercase text-lg font-bold">{post.title}</h1>
            <p className="text-sm">{post.body}</p>

            {<UserDetails id={post.userId} />}
          </div>
        </>
      );
    });
  };

  return (
    <>
      <>{renderList()}</>
    </>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);
