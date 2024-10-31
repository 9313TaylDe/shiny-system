import Links from "./Links";
import image from "../assets/productcollection3.png";
import image2 from "../assets/fones2.png";
import { useState } from "react";

const CollectionsProducts3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image, image2, image2, image];

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="containerpai-collection3">
      <div className="container-p-collection3">
        <a href="#">Melhores ofertas personalizadas</a>
        <h2 className="">
          Queima de
          <br />
          estoque Nike 🔥
        </h2>
        <p className="">
          Consequat culpa exercitation mollit nisi excepteur <br /> do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button className="button_oferta">Ver oferta</button>
      </div>
      <div className="container-collection3">
        <img
          className="selected-images"
          src={images[currentIndex]}
          alt="Produto"
        />
        <div className="w-full flex gap-2 align-content-center justify-content-center mt-2">
          {images.map((_, index) => (
            <img
              className="bolinhas"
              key={index}
              style={{
                height: "10px",
                width: "4%",
                borderRadius: "100%",
                border:
                  currentIndex === index % images.length ? "1px solid" : "0",
              }}
            />
          ))}
        </div>
      </div>

      <button
        id="next"
        className="pi pi-angle-right"
        onClick={handleNextImage}
      ></button>
    </section>
  );
};

export default CollectionsProducts3;
