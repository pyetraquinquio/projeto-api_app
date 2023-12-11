
"use client"; // for nextjs 13.4 user
import React from "react";
import "./TrendingSlider.css";

const TrendingSlider = () => {
  const filteredItems = [
    {
        id: 1,
        img: "/slide/poke2.jpg",
        
        
      },
      {
        id: 2,
        img: "/slide/poke5.jpg",
        
  
      },
      {
        id: 3,
        img: "/slide/poke3.jpg",
        
  
      },
      {
        id: 4,
        img: "/slide/poke4.jpg",
       
  
      },
      {
        id: 5,
        img: "/slide/poke1.jpg",
       
  
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
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                  <div className="item-header">
                    <img src={item.img} alt="product" />
                  </div>
            </div>
                 
             

            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingSlider;