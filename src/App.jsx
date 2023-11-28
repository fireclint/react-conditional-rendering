import { useState } from "react";
import Basic from "./components/Basic";
import Intermediate from "./components/Intermediate";
import Advanced from "./components/Advanced";

function App() {
  const [selectedItem, setSelectedItem] = useState(0);

  const data = [
    { id: 1, title: "Basic", description: "This is the basic package." },
    {
      id: 2,
      title: "Intermediate",
      description: "This is the intermediate package.",
    },
    { id: 3, title: "Advanced", description: "This is the advanced package." },
  ];

  return (
    <>
      {data.map((x) => (
        <div
          onClick={() => setSelectedItem(x.id)}
          key={x.id}
          style={{
            border: "1px solid black",
            margin: "18px",
            padding: "4px",
            cursor: "pointer",
          }}
        >
          <p>{x.id}</p>
          <p>{x.title}</p>
          <p>{x.description}</p>
        </div>
      ))}
      <p>You have item {selectedItem} selected.</p>
      {selectedItem === 1 && <Basic />}
      {selectedItem === 2 && <Intermediate />}
      {selectedItem === 3 && <Advanced />}
    </>
  );
}

export default App;
