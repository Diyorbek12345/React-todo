import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <>
      <Form setData={setData} />
      {data.map((item) => (
        <Card key={item.id} setData={setData} {...item} />
      ))}
    </>
  );
}

export default App;
