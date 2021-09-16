import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;
  const postData = {
    title: "Post Title",
    body: "Post Data"
  };

  const currentState = {
    1: {
      title: "Post Title",
      body: "Post Data",
      id: 1
    },
    2: {
      title: "Post Title",
      body: "Post Data",
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { title, body, id } = postData;
    action = {
      type: 'ADD_POST',
      title,
      body,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title,
        body,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: "Post Title",
        body: "Post Data",
        id: 2
      }
    });
  });
});