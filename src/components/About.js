import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  render() {
    return (
      <div className="h-screen flex items-center justify-center bg-[url(https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg)] bg-cover">
        <UserClass name={"First"} location={"Class"} />
      </div>
    );
  }
}

export default About;
