import { useRef } from "react";
import List from "../components/List";
import { connect } from "react-redux";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";

const Goals = ({ dispatch, goals }) => {
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();

    dispatch(
      handleAddGoal(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (goal) => {
    dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goals</h1>
      <input type="text" placeholder="Add goal" ref={inputRef} />
      <button onClick={addItem}>Add Goal</button>
      <List items={goals} remove={removeItem} />
    </div>
  );
};

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
