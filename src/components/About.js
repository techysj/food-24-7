import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ user }) => <h1 className="font-bold">{user}</h1>}
        </UserContext.Consumer>
        <UserClass name={"First"} location={"Class"} />
        <User name={"First"} location={"Class"} />
      </div>
    );
  }
}

export default About;
