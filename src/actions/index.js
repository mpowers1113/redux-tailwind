import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  //   console.log(getState().posts);
  //   const userIds = _uniq(_map(getState().posts, 'userId'));
  //   console.log(userIds);
  //   userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
