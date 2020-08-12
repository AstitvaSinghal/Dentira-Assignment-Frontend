export const updateData = (item) => (dispatch) => {
  console.log(item);
  dispatch({
    type: "UPDATE_DATA",
    payload: item,
  });
};
