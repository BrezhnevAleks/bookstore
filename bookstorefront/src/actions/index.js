import axios from "axios";

export const createUser = (login, email, password) => {
  return (dispatch) => {
    dispatch(createStarted());

    axios
      .post("http://localhost:4000/users/create", {
        login,
        email,
        password,
        completed: false,
      })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.body);
        dispatch(createSuccess(res.body));
      })
      .catch((err) => {
        dispatch(createFailure(err.message));
      });
  };
};

export const createSuccess = (data) => ({
  type: "USER_CREATE_SUCCESS",
  data,
});

export const createStarted = () => ({
  type: "USER_CREATE_STARTED",
});

export const createFailure = (error) => ({
  type: "USER_CREATE_FAILURE",
  error,
});
