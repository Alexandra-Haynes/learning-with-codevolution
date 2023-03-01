import React from "react";

function Columns() {
  const items = [];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Alexandra</td>
    </React.Fragment>
  );
}

export default Columns;

/*

Error: <td> can not appear as a child of <div>

React.Fragment can accept key attribute when rendering lists of items
Key attribute is the only attribute can be passed to fragments (as of now)

Shorthand: <> </> (no key)

*/
