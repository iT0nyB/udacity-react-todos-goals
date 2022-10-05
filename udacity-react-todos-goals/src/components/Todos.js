import { useRef } from "react";
import List from "../components/List";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleToggleTodo,
  handleDeleteTodo,
} from "../actions/todos";

const Todos = ({ dispatch, todos }) => {
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;

    dispatch(handleAddTodo(name, () => (inputRef.current.value = "")));
  };

  const toggleItem = (id) => {
    dispatch(handleToggleTodo(id));
  };

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List items={todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
