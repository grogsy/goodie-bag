/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

// combine reducer situationn:
//   one reducer for api grabbing
//   another one for onclick handling candy quantities

import axios from "axios";

// messages
const GOT_PREV_DATA = "GOT_PREV_DATA";
const GOT_SINGLE_ITEM = "GOT_SINGLE_ITEM";

// action
const gotPreviewData = data => ({
  type: GOT_PREV_DATA,
  data
});

const gotSingleItem = data => ({
  type: GOT_SINGLE_ITEM,
  data
});

// creators
export const getPreviewData = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/ids");
    dispatch(gotPreviewData(data));
  };
};

export const getSingleItem = id => {
  return async dispatch => {
    const { data } = await axios.get(`/api/${id}`);
    dispatch(gotSingleItem(data));
  };
};

const initialState = {
  previewData: [],
  singleItem: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PREV_DATA:
      return { ...state, previewData: action.data };
    case GOT_SINGLE_ITEM:
      return { ...state, singleItem: action.data };
    default:
      return state;
  }
};

export default rootReducer;
