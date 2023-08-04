import React, { useState } from "react";
import data from "./Picture.json";
import { NavLink } from "react-router-dom";

function SearchPage(props) {
  const store = props.hello;

  return (
    <div className="main_picture">
      <div
        className="card_picture"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          paddingTop: "1rem",
          backgroundColor: "white",
        }}
      >
        {data
          .filter((val) => {
            if (val === "") {
              return val;
            } else if (val.name.toLowerCase().includes(store.toLowerCase())) {
              return val;
            }else if(val.prices.toLowerCase().includes(store.toLowerCase())){
              return val;
            }
          })
          .map((val, index) => {
            return (
              <>
                <div
                  key={index}
                  className="card"
                  style={{
                    width: "17.5rem",
                    display: "inline-block",
                    marginLeft: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <img src={val.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <p className="card-text">{val.para}</p>

                    <NavLink href="#" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default SearchPage;
