const List = ({ items, remove, toggle }) => {
  return (
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
              onClick={() => toggle && toggle(item.id)}
            >
              {item.name}
            </span>
            <button onClick={() => remove(item)}>X</button>
          </li>
        ))}
    </ul>
  );
};

export default List;
