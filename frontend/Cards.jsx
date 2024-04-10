import React, { useState } from 'react';
import logo from "./images/Dribbble New 2023.png";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const Cards = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showGuidelines, setShowGuidelines] = useState(null); // Use null to represent none selected

  const handleCheckboxChange = (option) => {
    if(selectedOption==option){
      setSelectedOption(null);
      setShowGuidelines(null);
    }
    else{
    setSelectedOption(option);
    setShowGuidelines(option); }
    
      // Set the option as showGuidelines to display the associated guidelines
  };

  return (
    <div className="container">
      <div className="logo-img newlogo">
        <img src={logo} alt="" />
      </div>
      <div className="card-content">
        <h1>What brings you to Dribble?</h1>
        <p>Select the options that describe you. Don't worry, you can explore the other options later. </p>
        <div className="big-container">
          <div className="container-box">
            <div className="image-box">
              <img className={showGuidelines === 'option1' ? 'shift-up' : ''} src={image1} alt="" />
              <h3 className={showGuidelines === 'option1' ? 'shift-up' : ''}>I'm a designer looking to share my work</h3>
              <center>
                <input
                  className="checkbox"
                  name='SelectionCheckbox1'
                  id='SelectionCheckbox1'
                  type="checkbox"
                  checked={selectedOption === 'option1'}
                  onChange={() => handleCheckboxChange('option1')}
                />
              </center>
              {showGuidelines === 'option1' && <p className='guidelines shift-up'>Lorem ipsum dolor sit amet.</p>}
            </div>
          </div>
          <div className="container-box">
            <div className="image-box">
              <img className={showGuidelines === 'option2' ? 'shift-up' : ''} src={image2} alt="" />
              <h3 className={showGuidelines === 'option2' ? 'shift-up' : ''}>I'm looking to hire a designer</h3>
              <center>
                <input
                  className="checkbox"
                  name='SelectionCheckbox2'
                  id='SelectionCheckbox2'
                  type="checkbox"
                  checked={selectedOption === 'option2'}
                  onChange={() => handleCheckboxChange('option2')}
                />
              </center>
              {showGuidelines === 'option2' && <p className='guidelines shift-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ab.</p>}
            </div>
          </div>
          <div className="container-box">
            <div className="image-box">
              <img className={showGuidelines === 'option3' ? 'shift-up' : ''} src={image3} alt="" />
              <h3 className={showGuidelines === 'option3' ? 'shift-up' : '20px'}>I'm looking for design inspiration</h3>
              <center>
                <input
                  className='checkbox'
                  name='SelectionCheckbox3'
                  id='SelectionCheckbox3'
                  type="checkbox"
                  style={{ borderRadius: "50%" }}
                  checked={selectedOption === 'option3'}
                  onChange={() => handleCheckboxChange('option3')}
                />
              </center>
              {showGuidelines === 'option3' && <p className='guidelines shift-up'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>}
            </div>
          </div>
        </div>
        <button className={`btn fin-btn ${selectedOption ? 'active' : 'inactive'}`} disabled={!selectedOption}>Finish</button>

      </div>
    </div>
  );
}

export default Cards;
