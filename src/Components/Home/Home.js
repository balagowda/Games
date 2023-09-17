import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import tictoc from "../assets/tictoctoy.png";
import guess from "../assets/guess.jpg";
import conn4 from "../assets/conn.png";
import rock from "../assets/rockPaper.jpg";
import simon from "../assets/simon.jpg";
import dotn from "../assets/dotnbox.jpg";

const Home = () => {
  return (
    <div className="main">
      <div className="align-middle">
        <div className="outer-div">
          <Link to="/TicTocToy" className="lnk">
            <div className="card">
              <div className="card-body">
                <div className="div-piv">
                  <img src={tictoc} alt="nm" />
                </div>
                <div className="no fs-3 text-center">TIC TOC TOY</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/GuessNum" className="lnk">
            <div className="card">
              <div className="card-body">
                <div className="div-piv">
                  <img src={guess} alt="nm" />
                </div>
                <div className="no fs-3 text-center">Guess The Number</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/Connect4" className="lnk">
            <div className="card ">
              <div className="card-body">
                <div className="div-piv">
                  <img src={conn4} alt="nm" />
                </div>
                <div className="no fs-3 text-center">Connect Four</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/RockPaper" className="lnk">
            <div className="card">
              <div className="card-body">
                <div className="div-piv">
                  <img src={rock} alt="nm" />
                </div>
                <div className="no fs-3 text-center">Rock Paper Scissors</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/Simon" className="lnk">
            <div className="card">
              <div className="card-body">
                <div className="div-piv">
                  <img src={simon} alt="nm" />
                </div>
                <div className="no fs-3 text-center">Simon</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="outer-div">
          <Link to="/DotnCon" className="lnk">
            <div className="card">
              <div className="card-body">
                <div className="div-piv">
                  <img src={dotn} alt="nm" />
                </div>
                <div className="no fs-3 text-center">Dots and Boxes</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
