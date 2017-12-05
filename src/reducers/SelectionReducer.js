// to view single item from the list

export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};
