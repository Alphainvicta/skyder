import React from "react";
import Qcard from "./quality-card.jsx";
import Input from "../input/input.jsx";
import video1 from "../../videos/simple.mp4";
import video2 from "../../videos/standard.mp4";
import video3 from "../../videos/special.mp4";

class Qcardlist extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          title: "BASIC",
          video: video1,
          detail1: "Lorem ipsum dolor sit",
          detail2: "Amet  consectetur",
          detail3: "Adipiscing elit  sed",
          detail4: "Eiusmod  tempor incididunt",
          radio: "Basic",
          id: "q-card-1",
        },
        {
          title: "STANDARD",
          video: video2,
          detail1: "Lorem ipsum dolor sit",
          detail2: "Amet  consectetur",
          detail3: "Adipiscing elit  sed",
          detail4: "Eiusmod  tempor incididunt",
          radio: "Standard",
          id: "q-card-2",
        },
        {
          title: "PREMIUM",
          video: video3,
          detail1: "Lorem ipsum dolor sit",
          detail2: "Amet  consectetur",
          detail3: "Adipiscing elit  sed",
          detail4: "Eiusmod  tempor incididunt",
          radio: "Premium",
          id: "q-card-3",
        },
      ],
    };
  }
  render() {
    return this.state.cards.map(({ id, radio, ...cardsprops }) => (
      <>
        <Qcard key={id} {...cardsprops} />
        <Input
          id={radio}
          name="cards-radio"
          value={radio}
          type="radio"
          label="Choose package"
        />
      </>
    ));
  }
}

export default Qcardlist;
