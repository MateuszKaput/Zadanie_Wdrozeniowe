import React, { useState } from "react";
import "./gallery.css";
import Img1 from "./assets/images/img-1.jpg";
import Img2 from "./assets/images/img-2.jpg";
import Img3 from "./assets/images/img-3.jpg";
import Img4 from "./assets/images/img-4.jpg";
import Img5 from "./assets/images/img-5.jpg";
import Img6 from "./assets/images/img-6.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempingSrc} />
        <i
          id="exit"
          class="fas fa-times-circle"
          onClick={() => setModel(false)}
        ></i>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt="Jaś" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
