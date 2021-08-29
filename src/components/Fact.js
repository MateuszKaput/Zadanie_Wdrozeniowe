import React from "react";
import "./Fact.css";

class Fact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((fact) =>
        this.setState({
          text: fact.fact,
        })
      );
    console.log(this.state.text);
  }
  render() {
    return (
      <div className="text-on-image">
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default Fact;
