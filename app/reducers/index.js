/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import axios from "axios";

// messages
const GOT_PREV_DATA = "GOT_PREV_DATA";

// action
const gotPreviewData = data => ({
  type: GOT_PREV_DATA,
  data
});

// creators
export const getPreviewData = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/ids");
    dispatch(gotPreviewData(data));
  };
};

const initialState = {
  previewData: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PREV_DATA:
      return { ...state, previewData: action.data };
    default:
      return state;
  }
};

export default rootReducer;
