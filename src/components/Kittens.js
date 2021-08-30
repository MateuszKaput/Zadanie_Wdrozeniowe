import React from "react";
import "./Kittens.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class Kittens extends React.Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.state = {
      current: 0,
      text: "Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.",
    };
  }
  next() {
    this.slideRef.current.goNext();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeKittiFact(), 6000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  changeKittiFact() {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((fact) =>
        this.setState({
          text: fact.fact,
        })
      );
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 1000,
      arrows: false,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [
      "https://images3.alphacoders.com/567/thumb-1920-567149.jpg",
      "https://images3.alphacoders.com/793/thumb-1920-793646.jpg",
      "https://s1.1zoom.me/b5050/142/Cats_Kittens_Fence_Glance_576458_1920x1080.jpg",
      "https://images7.alphacoders.com/640/thumb-1920-640360.jpg",
      "https://www.tapeteos.pl/data/media/170/big/zwierzeta_1920x1080_054_koty.jpg",
      "https://images.alphacoders.com/442/thumb-1920-442601.jpg",
      "https://www.tapeteos.pl/data/media/170/big/zwierzeta_1920x1080_020_kot.jpg",
      "https://s1.1zoom.me/b5050/747/Cats_Munchkin_Kittens_Cute_Four_4_566399_1920x1080.jpg",
      "https://images.alphacoders.com/505/thumb-1920-505009.jpg",
    ];
    return (
      <>
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>
        <div className="text-on-image">
          <p>{this.state.text}</p>
        </div>
      </>
    );
  }
}
export default Kittens;
