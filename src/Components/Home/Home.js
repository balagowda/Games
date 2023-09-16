import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="align-middle">
        
        <div className="outer-div">
          <Link to="/TicTocToy" className="lnk">
            <div className="card">
              <div className="card-body d-flex">
                <div className="no fs-3">TIC TOC TOY</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/GuessNum" className="lnk">
            <div className="card">
              <div className="card-body d-flex">
                <div className="no fs-3">Guess The Number</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/Connect4" className="lnk">
            <div className="card ">
              <div className="card-body d-flex">
                <div className="no fs-3">Connect Four</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/RockPaper" className="lnk">
            <div className="card">
              <div className="card-body d-flex">
                <div className="no fs-3">Rock Paper Scissors</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/Simon" className="lnk">
            <div className="card">
              <div className="card-body d-flex">
                <div className="no fs-3">Simon</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/DotnCon" className="lnk">
            <div className="card">
              <div className="card-body d-flex">
                <div className="no fs-3">Dots and Boxes</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
