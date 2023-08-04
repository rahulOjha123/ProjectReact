import React, { useEffect } from "react";
import { useState } from "react";
import "../Paginnation/HomePage.css";

function HomePage() {
  const [imgdata, setImgdata] = useState([]);
  const [pages, setPages] = useState(1);

  const paginnationdata = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    console.log(data.products);
    setImgdata(data.products);
  };

  useEffect(() => {
    paginnationdata();
  });

  const selectPageHandler = (selectedPage) => {
    if(selectedPage>=1 && selectedPage<=imgdata.length/6 && selectedPage!==pages)

    setPages(selectedPage);
  };

 
  return (
    <div className="container">
      {imgdata.slice(pages * 6 - 6, pages * 6).map((val, index) => {
        return (
          <div className="product" key={index}>
            <span className="product__single">
              <img src={val.thumbnail}></img>
              <span>{val.title}</span>
            </span>
          </div>
        );
      })}
      {imgdata.length > 0 ? (
        <div className="pagination">
          <span style={{ fontSize: "20px" }} onClick={() =>selectPageHandler(pages-1)}>
            -
          </span>
          {[...Array(imgdata.length / 6)].map((arr, i) => {
            return (
              <span
                onClick={() => selectPageHandler(i + 1)}
                key={i}
                className={pages === i + 1 ? "pagination_selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            style={{ fontSize: "20px" }}
            onClick={() => selectPageHandler(pages + 1)}
          >
            +
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomePage;
