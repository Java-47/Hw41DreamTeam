import React from "react";
import { base_url } from "../utils/constants";

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: [],
    };
  }

  componentDidMount() {
    const spaceList = [];
    fetch(`${base_url}/v1/species`)
      .then((response) => response.json())
      .then((data) =>
        data.forEach((item, index) => {
          spaceList.push(item.name);
          this.setState({
            myList: spaceList,
          });
        })
      );
  }

  render() {
    return (
      <select id="space" name="space">
        {this.state.myList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}

export default Species;
