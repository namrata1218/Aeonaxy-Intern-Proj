import React, { useState } from "react";
import axios from 'axios';
import logo from "./images/Dribbble New 2023.png";
import first from "./images/newproject1.jpg";

const Home = () => {
  const[name, setName]=useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', { name,username, email, password });
      setMessage(response.data.message);
      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container home">
        <div className="left">
          <div className="content-container">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="home-text">
              Discover the world's top <br />
              Designers & Creatives.
            </h1>
            <img className="leftimage" src={first} alt="images" />
            <footer>
              <p>
                Art by <span><a href="">Peter Tharka</a></span>
              </p>
            </footer>
          </div>
        </div>

        <div className="right">
          <header>
            <div className="logo-image right-logo">
              <img src={logo} alt="" />
            </div>
            <p>
              Already a member?<a href="#">Sign In</a>
            </p>
          </header>
          <div className="form-container">
            <h1>Sign up to Dribble</h1>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-container">
                  <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" placeholder="Namrata Shakya" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="namrat1801" name="username" required />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc12@gmail.com" id="email" name="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="6+ characters" name="password" required />
              </div>
              <div className="input-group">
                <input type="checkbox" id="checkbox" /><p>Creating an account means
                 you're okay with our <a href="#">Terms of 
              <br /> Service,Privacy Policy</a>,and our default 
              <a href="#"> Notification <br /> Settings.</a></p>
              </div>
              <div className="input-group">
                <button type="submit" className="btn">Create Account</button>
              </div>
              <div className="input-group">
                <p id="privacy">The site is protected by reCAPTCHA and the Google <br />
                  <a href="#">Privacy Policy,</a>and <a href="#">Terms of Service</a>
                  <br />apply</p>
              </div>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
