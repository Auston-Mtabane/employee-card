import { useState } from "react";
interface Props {
  names: string[];
  heading: string;
}
function ListGroup({names,heading}: Props) {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <br />
      <br />
      <h3>{heading}</h3>
      <br />
      <ul className="list-group">
        {names.map((name, index) => (
          <li
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            key={name}
            onClick={() => {
              setSelected(index);
            }}
          >
            {" "}
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
