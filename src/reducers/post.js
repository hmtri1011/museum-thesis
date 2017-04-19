const initialState = {
  posts: {
    byId: {},
    allIds: []
  }
}

const addPost = (state, action) => {
  return Object.assign({}, state, {
    posts: {
      byId: {
        [action.payload.id]: action.payload
      },
      allIds: [...state.posts.allIds, action.payload.id]
    }
  })
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      return addPost(state, action)
  }

  return state
}
