import React from 'react';
import "../css_modules/contact.module.css";
import { base_url, periodMonth } from "../utils/constants";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: ['wait...']
    };
  }

  async fillPlanets(url) {
    const response = await fetch(url);
    const json = await response.json();
    const planets = json.map(item => item.name);
    this.setState({ planets });
    const info = {
      payLoad: planets,
      time: Date.now()
    };
    localStorage.setItem('planets', JSON.stringify(info));

  }

  componentDidMount() {
    const planets = JSON.parse(localStorage.getItem('planets'));
    if (!planets || (Date.now() - planets.time) > periodMonth) {
      this.fillPlanets(`${base_url}/v1/planets`);
    } else {
      this.setState({ planets: planets.payLoad });
    }

  }

  componentWillUnmount() {
    console.log('Component Contact unmounted');
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <label>First Name
            <input type="text" name="firstname" placeholder="Your name.." />
          </label>
          <label>Planet
            <select name="planet">{
              this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
            }
            </select>
          </label>
          <label>Subject
            <textarea name="subject" placeholder="Write something.." />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Contact;
