import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  useState(
    people.map((value) => {
      Object.assign(value, {
        age: new Date().getFullYear() - new Date(value.birth).getFullYear(),
        test: "test",
      });
    })
  );

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear All</button>
      </section>
    </main>
  );
}

export default App;
