import * as request from "superagent";

const baseUrl = "http://localhost:4001";

export const FETCHED_DETAILED_PRODUCT = "FETCHED_DETAILED_PRODUCT";
export const FETCHED_ALL_PRODUCTS = "FETCHED_ALL_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const fetchProduct = productId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .get(`${baseUrl}/products/${productId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_DETAILED_PRODUCT,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const fetchAllProducts = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .get(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_ALL_PRODUCTS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const createProduct = product => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(product)
    .then(response =>
      dispatch({
        type: ADD_PRODUCT,
        payload: response.body
      })
    );
};

export const deleteProduct = productId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .delete(`${baseUrl}/products/${productId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCHED_ALL_PRODUCTS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const updateProduct = (productId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .put(`${baseUrl}/products/${productId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: UPDATE_PRODUCT,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};
