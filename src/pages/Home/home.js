import React from "react";
import red from "../../assets/red.png";
import "./home.css";

import PokeballButton from "../../components/PokeballButton/PokeballButton";


function Home() {

  return (

    <div className="main-bg">

      <div className="trainer-card">

        <img
          className="avatar"
          src={red}
          alt="avatar"
        />

        <div className="trainer-info">

          <div className="info-box">
            <span>Nome</span>
            <h3>Thiago Luz</h3>
          </div>

          <div className="info-box">
            <span>Idade</span>
            <h3>18</h3>
          </div>

          <div className="info-box">
            <span>Nickname</span>
            <h3>Th</h3>
          </div>

          <div className="info-box">
            <span>Pokémons</span>
            <h3>2 / 6</h3>
          </div>

        </div>
        <div className="pokeballs">

          <PokeballButton pokemon="froakie" />

          <PokeballButton pokemon="oshawott" />

          <PokeballButton locked={true} />
          <PokeballButton locked={true} />
          <PokeballButton locked={true} />
          <PokeballButton locked={true} />

        </div>

      </div>

    </div>

  );
}

export default Home;