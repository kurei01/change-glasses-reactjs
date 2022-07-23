import React, { Component } from "react";
import g1 from "../assets/glassesImage/g1.jpg";
import g2 from "../assets/glassesImage/g2.jpg";
import g3 from "../assets/glassesImage/g3.jpg";
import g4 from "../assets/glassesImage/g4.jpg";
import g5 from "../assets/glassesImage/g5.jpg";
import g6 from "../assets/glassesImage/g6.jpg";
import g7 from "../assets/glassesImage/g7.jpg";
import g8 from "../assets/glassesImage/g8.jpg";
import g9 from "../assets/glassesImage/g9.jpg";
import v1 from "../assets/glassesImage/v1.png";
import v2 from "../assets/glassesImage/v2.png";
import v3 from "../assets/glassesImage/v3.png";
import v4 from "../assets/glassesImage/v4.png";
import v5 from "../assets/glassesImage/v5.png";
import v6 from "../assets/glassesImage/v6.png";
import v7 from "../assets/glassesImage/v7.png";
import v8 from "../assets/glassesImage/v8.png";
import v9 from "../assets/glassesImage/v9.png";
import model from "../assets/glassesImage/model.jpg";
import "./style.css";

export class ChangeGlasses extends Component {
  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      img: g1,
      imgTest: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      img: g2,
      imgTest: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      img: g3,
      imgTest: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      img: g4,
      imgTest: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      img: g5,
      imgTest: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      img: g6,
      imgTest: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      img: g7,
      imgTest: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      img: g8,
      imgTest: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      img: g9,
      imgTest: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassImg: this.glassList[0].imgTest,
    name: this.glassList[0].name,
    price: this.glassList[0].price,
    desc: this.glassList[0].desc,
  };

  changeGlass = (item) => {
    this.setState({
      glassImg: item.imgTest,
      name: item.name,
      price: item.price,
      desc: item.desc,
    });
  };

  rederGlass = () => {
    return this.glassList.map((item) => {
      return (
        <div
          key={item.id}
          className="catch-glass col col-2"
          onClick={() => this.changeGlass(item)}
        >
          <img src={item.imgTest} className="img-fluid" />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="body">
        <header className="container-fluid header">
          <h1>Try glasses app online</h1>
        </header>
        <main className="main pt-5">
          <div className="row">
            <div className="col col-6">
              <div className="model">
                <img src={model} className="img-fluid" />
                <div className="glass">
                  <img src={this.state.glassImg} />
                </div>
                <div className="detail">
                  <h5>{this.state.name}</h5>
                  <p>price: ${this.state.price}</p>
                  <p>{this.state.desc}</p>
                </div>
              </div>
            </div>

            <div className="col col-6">
              <div className="model">
                <img src={model} className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row p-5">{this.rederGlass()}</div>
        </main>
      </div>
    );
  }
}

export default ChangeGlasses;
