import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchPage from "./SearchPage";
import { NavLink } from "react-router-dom";



function Home() {

    const [hello,setData]=useState([])
    useEffect(()=>{
        loadimgs()
    },[])
    const loadimgs= async()=>{
        const result=await axios.get(`http://localhost:3003/posts`);
        setData(result.data);
    }
  return (
    <div className="main_div">
      
        <div className="more_imgs">
                {
                    hello.map((val,index)=>{
                        return(
                          <NavLink exact to ="/searchpage"className="navlink">
                            <div className="imgss">
                              
                                <img src={val.img} style={{width:'110px',height:"100px"}}></img>
                                <span>{val.name}</span>
                            </div>
                          </NavLink>
                        )
                    })
                }
        </div>
      <div className="slider">
        <div className="img">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/900/240/image/4cd6690ef44564f3.jpg?q=50"
            alt="img"
          ></img>
        </div>
      
      </div>
      <div className="third_card">
      <div className="card_picture">
        <div className="card" >
          <img src="https://rukminim2.flixcart.com/flap/400/400/image/20c224cd52ae7a87.jpg?q=70" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Best Of Tremmers</h5>
            <p className="card-text">
            <b> $300</b>
            </p>
            <p className="card-text text-green">realme,Mi,Philips</p>
          </div>
        </div>
        <div className="card" >
          <img src="https://rukminim2.flixcart.com/image/400/400/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Best Of Tremmers</h5>
            <p className="card-text">
            <b> $300</b>
            </p>
            <p className="card-text text-green">realme,Mi,Philips</p>
          </div>
        </div>
        <div className="card" >
          <img src="https://rukminim2.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Best Of Tremmers</h5>
            <p className="card-text">
            <b> $300</b>
            </p>
            <p className="card-text text-green">realme,Mi,Philips</p>
          </div>
        </div>
        <div className="card" >
          <img src="https://rukminim2.flixcart.com/image/400/400/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Best Of Tremmers</h5>
            <p className="card-text">
            <b> $300</b>
            </p>
            <p className="card-text text-green">realme,Mi,Philips</p>
          </div>
        </div>
       
       
        
        
      </div>
      </div>
    </div>
  );
}

export default Home;
