import * as BT from "./bookTypes";
import axios from "axios";

export const saveBook = (book) => {
  return (dispatch) => {
    dispatch({
      type: BT.SAVE_BOOK_REQUEST,
    });
    axios
      .post("http://localhost:8081/rest/seatbooking", book)
      .then((response) => {
        dispatch(bookSuccess(response.data));
      })
      .catch((error) => {
        dispatch(bookFailure(error));
      });
  };
};

export const fetchBook = (bookId) => {
  return (dispatch) => {
    dispatch({
      type: BT.FETCH_BOOK_REQUEST,
    });
    axios
      .get("http://localhost:8081/rest/seatbooking/" + bookId)
      .then((response) => {
        dispatch(bookSuccess(response.data));
      })
      .catch((error) => {
        dispatch(bookFailure(error));
      });
  };
};

export const updateBook = (book) => {
  return (dispatch) => {
    dispatch({
      type: BT.UPDATE_BOOK_REQUEST,
    });
    axios
      .put("http://localhost:8081/rest/seatbooking", book)
      .then((response) => {
        dispatch(bookSuccess(response.data));
      })
      .catch((error) => {
        dispatch(bookFailure(error));
      });
  };
};

export const deleteBook = (bookId) => {
  return (dispatch) => {
    dispatch({
      type: BT.DELETE_BOOK_REQUEST,
    });
    axios
      .delete("http://localhost:8081/rest/seatbooking/" + bookId)
      .then((response) => {
        dispatch(bookSuccess(response.data));
      })
      .catch((error) => {
        dispatch(bookFailure(error));
      });
  };
};

const bookSuccess = (book) => {
  return {
    type: BT.BOOK_SUCCESS,
    payload: book,
  };
};

const bookFailure = (error) => {
  return {
    type: BT.BOOK_FAILURE,
    payload: error,
  };
};


export const fetchGenres = () => {
  return (dispatch) => {
    dispatch({
      type: BT.FETCH_GENRES_REQUEST,
    });
    axios
      .get("http://localhost:8081/rest/seatbooking/genres")
      .then((response) => {
        dispatch({
          type: BT.GENRES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: BT.GENRES_FAILURE,
          payload: error,
        });
      });
  };
};