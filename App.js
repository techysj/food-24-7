// const h1React = React.createElement(
//   "h1",
//   {
//     id: "heading", // here inside this object we can pass whatever attributes we want to pass to our object
//     className:"head1"
//   },
//   "Helllo World from Reeact"
// );
// const rootReact = ReactDOM.createRoot(document.getElementById("root"));
// rootReact.render(h1React);

// console.log(h1React); // it will give us an JS object
// // so basically all our react elements are JS objects while the parameters passed are called props.

// // rootReact.render(h1React); ---> this render method will take our react element and convert it
// // into heading tag(or any other) and render it into DOM i.e our root element.

//Suppose we have to create nested elements like

{
  /* <div id = "parent">
    <div id = "child">
        <h1>I am h1</h1>
        <h2>I am h2</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ])
);
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(parent);

// This will become more complex and unreadable incase of more complex structure.
// UGLY CODE
