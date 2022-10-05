import API from "goals-todos-api";

export const RECEIVE_DATA = "RECEIVE_DATA";

const receiveDataAction = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    goals,
    todos,
  };
};

export const handleInitialData = () => {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveDataAction(todos, goals));
    });
  };
};
