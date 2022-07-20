import React from "react";
import { base_url } from "../utils/constants";
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      skinC: "",
      hairC: "",
      mass: "",
      height: "",
      eyeC: "",
    };
  }
  componentDidMount() {
    fetch(`${base_url}/v1/peoples/1`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data.name,
          gender: data.gender,
          eyeC: data.eye_color,
          hairC: data.hair_color,
          height: data.height,
          mass: data.mass,
          skinC: data.skin_color,
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <div>Gender: {this.state.gender}</div>
        <div>Skin color: {this.state.skinC}</div>
        <div>Hair color: {this.state.hairC}</div>
        <div>Mass: {this.state.mass}</div>
        <div>height: {this.state.height}</div>
        <div>Eye color: {this.state.eyeC}</div>
      </div>
    );
  }
}

export default AboutMe;
