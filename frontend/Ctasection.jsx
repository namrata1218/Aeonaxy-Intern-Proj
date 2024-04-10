import React from 'react'
import logo from './images/Dribbble New 2023.png';
import { IoBasketballOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Ctasection = () => {
  return (
    <div>
      <div className="container cta-section">
        <div className="cta-left">
            <img src={logo} alt="logo" />
            <br />
            <p>Drible is the world's leading <br />
            community for creatives to share, grow, <br />
            and get hired.</p>
            <br />
            
            <div className="list_items">
            <ul>
                <li><a href="https://dribbble.com/"><IoBasketballOutline size='20px' color='rgb(38, 32, 32)'/></a></li>
                <li><a  href="https://twitter.com/dribbble"><FaTwitter size='20px'color='rgb(38, 32, 32)' /></a></li>
                <li><a href="https://www.facebook.com/dribbble"><FaFacebookSquare size='20px'color='rgb(38, 32, 32)' /></a></li>
                <li><a href="https://www.instagram.com/dribbble"><FaInstagram size='20px'color='rgb(38, 32, 32)' /></a></li>
                <li><a href="https://in.pinterest.com/dribbble/"><FaPinterest size='20px'color='rgb(38, 32, 32)' /></a></li>
            </ul></div>
            

        </div>
        <div className="cta-right">
            <div className="list">
                <h3>For designers</h3>
                <ul>
                    <li className='list1e'><a href="#">Go Pro!</a></li>
                    <li className='list1e'><a href="#">Explore design work</a></li>
                    <li className='list1e'><a href="#">Design blog</a></li>
                    <li className='list1e'><a href="#">Overtime podcast</a></li>
                    <li className='list1e'><a href="#">Playoffs</a></li>
                    <li className='list1e'><a href="#">Weekly Warm-Up</a></li>
                    <li className='list1e'><a href="#">Refer a Friend</a></li>
                    <li className='list1e'><a href="#"Code of conduct></a></li>
            
                </ul >
            </div>
            <div className="list">
                <h3>Hire designers</h3>
                <ul>
                    <li><a href="">Post a job opening</a></li>
                    <li><a href="">Post a software project</a></li>
                    <li><a href="">Search for designers</a></li>
                </ul>
                <h3>Brands</h3>
                <ul><li><a href="#">Advertise with us</a></li></ul>
            </div>
            <div className="list">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Media kit</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#"></a>Privacy policy</li>
                    <li><a href="#">Cookie policy</a></li>
                
                </ul>
            </div>
            <div className="list">
                <h3>Directories</h3>
                <ul>
                    <li><a href="#">Design jobs</a></li>
                    <li><a href="#">Designers for hire</a></li>
                    <li><a href="#">Freelance designers for hire</a></li>
                    <li><a href="#">Tags</a></li>
                    <li><a href="#">Places</a></li>
                </ul>
                <h3>Design assests</h3>
                <ul>
                    <li><a href="#">Dribble Marketplace</a></li>
                    <li><a href="#">Creative Market</a></li>
                    <li><a href="#">Fontspring</a></li>
                    <li><a href="#">Font Squirrel</a></li>
                </ul>
            </div>
            <div className="list">
                <h3>Design Resources</h3>
                <ul>
                    <li><a href="#">Freelancing</a></li>
                    <li><a href="#">Design Hiring</a></li>
                    <li><a href="#">Design Portfolio</a></li>
                    <li><a href="#">Design Education</a></li>
                    <li><a href="#">Creative Process</a></li>
                    <li><a href="#">Design Industry Trends</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ctasection
