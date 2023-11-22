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
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, blog, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <p className="px-4 w-full lg:p-0 lg:w-[800px] text-base md:text-xl mx-auto">
          Food 24/7 is a place with a variety of restaurants where you can get
          anything, whenever you want. You can use all of the capabilities of
          the food ordering app because this is based on Swiggy's live data. 😁
        </p>

        <h4 className="italic text-right mr-4 mt-4">By - {name}</h4>

        <h4 className="italic text-right mr-4 mt-4 underline text-blue-950">
          <Link to={blog}>Learn More</Link>
        </h4>
      </div>
    );
  }
}
export default UserClass;
