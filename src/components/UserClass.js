import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/techysj");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, blog, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h4>UserName: {name}</h4>

        <h4>
          <Link to={blog}>BLOG</Link>
        </h4>
      </div>
    );
  }
}
export default UserClass;
