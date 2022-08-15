import React from "react";
import "./screen1.css";
import { Link } from "react-router-dom";
import {useState} from 'react'
const Screen1 = () => {
  const [div1, setdiv1] = useState(true);
  const [div2, setdiv2] = useState(false);
  const [div3, setdiv3] = useState(false);
  return (
    <div className="">
      <div className="screen1_parent_div"></div>
{/* -------------------------------------Chunk1----------------------------------------- */}
      
      {
             div1 &&
      <div  className="text-center who_for_parent">
        <p className="text-light fw-ligth display-6">Who's it for?</p>
        <div class="containerr">
          <div class="left-div ">
            <div className=" p-4 m-4 text-center outer_container_card" style={{float:"right"}}>
              <div className="inner_card_div"></div>
              
              <h4  className="text-primary mt-3">
                <span className="global_hover" onClick={()=>setdiv1(false) & setdiv2(true)}>For myself</span>
              </h4>
              
              <p className="text-muted ">Lorem ipsum dolor, sit</p>
            </div>
          </div>
          <div class="right-div">
          <div className=" p-4 m-4 text-center outer_container_card" >
          <div className="inner_card_div"></div>
        
          <h4 className="text-primary mt-3">
            <span className="global_hover" onClick={()=>setdiv1(false) & setdiv2(true)}>For someone else</span>
          </h4>

          <p className="text-muted ">Amit concepeto</p>
          </div>
          </div>
        </div>
      </div>
  }    

{/* //-------------------------------------Chunk2----------------------------------------- */}
{
  div2 &&
  <div  className="text-center who_for_parent ">
    <div className="screen_1_lets_get_to_know_parent py-4">
      <h2 className="pt-5 "><span className="fw-300 ">Let's get to know you</span></h2>
      <input className="form-control form-control-lg global_input mt-4"  type="text" placeholder="What's your name?"/>
      <button className="global_button mt-3" onClick={()=>setdiv2(false) & setdiv3(true)}>Continue</button>
      </div>
  </div>
}
{/* //-------------------------------------Chunk3----------------------------------------- */}


{
  div3 &&
  <div  className="text-center who_for_parent ">
    <div className="screen_1_lets_get_to_know_parent py-4">
      <h2 className="pt-5 "><span className="fw-300 ">Hey there!</span></h2>
      <input className="form-control form-control-lg global_input mt-4"  type="text" placeholder="What's your email?"/>
      <Link to="/upload"><button className="global_button mt-3">Continue</button></Link>
      <p className="mt-3 text-muted p-0 term_policies_dis">By continuing you indicate that you have read and agreed to our</p>
      <p className="term_policies">Terms of Uses & Privacy Policy</p>
      </div>
  </div>
}


    </div>
  );
};

export default Screen1;
