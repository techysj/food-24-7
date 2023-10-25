import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  render() {
    return (
      <div>
        <UserClass name={"First"} location={"Class"} />
        <User name={"First"} location={"Class"} />
      </div>
    );
  }
}

export default About;
