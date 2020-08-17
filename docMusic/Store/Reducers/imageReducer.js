const exempleImage = {
  id: 1111,
  url: 'url image',
  filepath: 'path dans le cache',
};

const initialState = {
  imageId: [],
  imageCache: [],
};

function imageFilter(imageList, id) {
  return imageList.filter(function (data) {
    return data === id;
  });
}

function imageReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'ADD_IMAGE':
      let found = imageFilter(state.imageId, action.image.id);
      if (found) {
        return state;
      }
      nextState = {
        ...state,
        imageId: [...state.imageId, action.image.id],
        imageCache: [...state.imageCache, action.image],
      };
      return nextState;
    default:
      return state;
  }
}

export default imageReducer;
