import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            First, we’ll examine how to create a new React project. While doing
            so, we’ll teach you both how to start your own React projects and
            how to utilize the React template system to quickly instantiate the
            examples and projects that we’ll work on in this book. It’s quite
            magical how in a single line you can get the code down loaded and
            ready to go with everything set up for you!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Propert Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
