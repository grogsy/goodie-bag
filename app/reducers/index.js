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
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// action
const gotPreviewData = data => ({
  type: GOT_PREV_DATA,
  data
});

const gotSingleItem = data => ({
  type: GOT_SINGLE_ITEM,
  data
});

const updateItemQuantity = updatedObject => ({
  type: UPDATE_QUANTITY,
  updatedObject
});

// creators
export const getPreviewData = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/ids");
    dispatch(gotPreviewData(data));
  };
};

export const updateQuantity = (id, updatedAmount) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/${id}`, {
      quantity: updatedAmount
    });
    dispatch(updateItemQuantity(data));
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
    case UPDATE_QUANTITY:
      return { ...state, singleItem: action.updatedObject };
    default:
      return state;
  }
};

export default rootReducer;
