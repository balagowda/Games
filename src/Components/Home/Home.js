import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="align-middle">

        <Link to="/TicTocToy" >
          <div className="card p-1 m-3">
            <div className="card-body d-flex">
              <div className="no fs-3">TIC TOC TOY</div>

              <div className="ms-auto ">
                <i className="bi bi-arrow-right bi-5x"></i>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/GuessNum" >
          <div className="card p-1 m-3">
            <div className="card-body d-flex">
              <div className="no fs-3">Guess The Number</div>

              <div className="ms-auto ">
                <i className="bi bi-arrow-right bi-5x"></i>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/Connect4" >
          <div className="card p-1 m-3">
            <div className="card-body d-flex">
              <div className="no fs-3">Connect Four</div>

              <div className="ms-auto ">
                <i className="bi bi-arrow-right bi-5x"></i>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/RockPaper" >
          <div className="card p-1 m-3">
            <div className="card-body d-flex">
              <div className="no fs-3">Rock Paper Scissors</div>

              <div className="ms-auto ">
                <i className="bi bi-arrow-right bi-5x"></i>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/Simon" >
          <div className="card p-1 m-3">
            <div className="card-body d-flex">
            <div className="no fs-3">Simon</div>

              <div className="ms-auto ">
                <i className="bi bi-arrow-right bi-5x"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
