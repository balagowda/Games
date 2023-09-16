import React from "react";
import "./play.css";
import TicTocToy from "../TicTocToy/TicTocToy";
import GuessNum from "../Guess/GuessNum";
import Connect4 from "../Connect4/Connect4";
import RockPaper from "../RockPaper/RockPaper";
import Simon from "../Simon/Simon";

import NotFound from "../Home/NotFound";
import { useParams } from "react-router-dom";
import DotnCon from "../DotandCon/DotnCon";

const Play = () => {
  const {game} = useParams();

  return(
    <div className="body">
      {
        (()=>{
          switch (game) {
            case 'TicTocToy':
              return <TicTocToy/>
            case 'GuessNum':
              return <GuessNum/>
            case 'Connect4':
              return <Connect4/>
            case 'RockPaper':
              return <RockPaper/>
            case 'Simon':
              return <Simon/>
            case 'DotnCon':
              return <DotnCon/>
            default:
              return <NotFound/>
          }
        })()
      }
    </div>
  )
  
};

export default Play;
