import React from "react";
import ReactDOM from "react-dom";

// REACT ELEMENTS

const heading = React.createElement("h1", { id: "parent" }, "I am heading");
// Since in case of highlevel nesting this code will be un readable

// We will start using JSX from now- which is basically an HTML like syntax used to create React elements

const jsxHeading = (
  <h1 id="heading" className="test">
    Hello JSX
  </h1>
);

// heading and jsxHeading both are exactly same i.e
//  JS object which after getting rendered gets converted to DOM elements.

// there is a slight difference in the attribute defination as
// class is className in  JSX same for other attributes as well.

const jsxHeadingMulti = (
  <h1 id="heading" className="test">
    <p>Hello JSXmulti </p>
  </h1>
);
// In case of multi line JSX we need to wrap it inside paranthesis ().

// Behind the scenes our JSX is converted to HTML by babel which is used by Parcel.

// JSX --> React.createElement -->React JS element --> Rendered to DOM as HTML.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

// REACT COMPONENTS-
// 1. Class Based React Components.Based
// 2. Functional Component.

// FUNCTIONAL REACT COMPONENTS --- These are basically JS functions which returns an JSX code or and react element.

// to create --- just make sure to start the function name with capital letter. like const HeadingComp.

// const HeadingComp = () => {
//   return (
//     <h1 id="heading" className="test">
//       Hello Functional Component
//     </h1>
//   );
// };
// We can make above code more consize by using ES6
const HeadingComp = () => (
  <h1 id="heading" className="test">
    Hello Functional Component
  </h1>
);

// can also be written as
// const HeadingComp = () => <h1 id="heading" className="test"> Hello Functional Component</h1>

// Same way we can create more components and use it inside another component.
// This is called component coposition. But we need to wrap all the compoennts under one parent element

const Title = () => (
  <div id="container">
    <HeadingComp />
    <h2>I am here H2</h2>
  </div>
);

// Now suppose we need to use any "REACT ELEMENT" inside any component or any element itself. we need to wrap it inside { element }
var number = 1000;
const ElemInsideComp = () => (
  <div id="container">
    <HeadingComp />
    <h2>I am here H2</h2>
    {jsxHeadingMulti}
    {number}
    {/* inside this {} we can write any JS code even console and all other things
  cuz at EOD that element is also a JS code, we can also pass variables which we will be able to see on frontend
  */}
  </div>
);

// same way we can use element inside an element

const elemInElem = <h1>Elem in Elem</h1>;
const elemInElem2 = (
  <div>
    {elemInElem}
    <h1>Elem in Elem </h1>
  </div>
);

// As we know that react component is also A JS FUNCTION only. we can call it inside a component or element as a function like {Title()}

const compInElem = (
  <div>
    {Title()}
    <h1>Elem in Elem </h1>
  </div>
);

// to render this  we need to wrap it in <componentName /> i.e root.render(<HeadingComp />)
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(compInElem);
