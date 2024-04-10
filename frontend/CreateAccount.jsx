import React, { useRef, useState } from "react";
import logo from "./images/Dribbble New 2023.png";
const CreateAccount = () => {
  const inputRef=useRef(null);
  const[image ,setImage]=useState("")
  const handleImageClick=()=>{
    inputRef.current.click();
    
  };
  const handleImageChange=(event)=>{
    const file=event.target.files[0];
    setImage(event.target.files[0]);
  }
  return (<>
  <div className="container ">
    <div className="logo-image">
      <img src={logo} alt="" />
    </div>
    <div className="form-container">
      <div className="createbox">
      <h1>Welcome! Let's create your profile</h1>
      <p id="tagline">Let others get to know your better! You can do these later.</p>
      <h2>Add an Avtar</h2>
      <div className="upload-area">
      <div onClick={handleImageClick} className="image-upload">
        
        {
          image?<img src={URL.createObjectURL(image)} alt="" />:<img src={logo} alt=""/>
        }
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:"none"}} />
      </div></div>
      <div className="location">
      <h2>Add your location</h2>
      <input type="text" id="locate" placeholder="Enter a location"/></div>
      <button className="next-btn">Next</button>
      </div>
      
      
    </div>
    </div>
    </>
  );
};

export default CreateAccount;
