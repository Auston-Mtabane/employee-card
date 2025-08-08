import Message from "./Message";
import ListGroup from "./components/ListItem";
import PersonCard from "./components/PersonCard";
import "./App.css";
import data from "./employees.json";

const names = ["Auston", "Jason", "Nhlakanipho", "Hashim"];

function App() {
  const employees = data.employees;

  return (
    <div>
      <Message />
      <ListGroup names={names} heading={"Tech Voyegers"} />
      <br />
      {employees.map((e)=>(<PersonCard key={`${e.dateOfBirth}+${e.name}`} {...e}/>))}
    </div>
  );
}

export default App;
