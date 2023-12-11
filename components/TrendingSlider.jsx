
"use client"; // for nextjs 13.4 user
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./TrendingSlider.css";

const TrendingSlider = () => {
  const filteredItems = [
    {
        id: 1,
        img: "/public/slide/poke1.jpg",
        description: "Barroco",
        Link: "/pagArtes/barroco"
      },
      {
        id: 2,
        img: "public/slide/poke2.jpg",
        description: "Rococó",
        Link: "/pagArtes/rococo"
  
      },
      {
        id: 3,
        img: "public/slide/poke3.jpg",
        description: "Renascimento",
        Link: "/pagArtes/renascimento"
  
      },
      {
        id: 4,
        img: "public/slide/poke4.jpg",
        description: "Impressionismo",
        Link: "/pagArtes/impressionismo"
  
      },
      {
        id: 5,
        img: "public/slide/poke5.jpg",
        description: "Romantismo",
        Link: "/pagArtes/romantismo"
  
      }


  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className="trending">
        <div className="container">
          <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingSlider;