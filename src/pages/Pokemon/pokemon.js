import React from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import "./pokemon.css";

import useFetchPokeapi from "../../hooks/useFetchPokeapi";

function Pokemon() {

  const { name } = useParams();

  const {
    pokemons,
    loading,
    error
  } = useFetchPokeapi(name);

  if (loading) {

    return (
      <h1 className="status">
        Carregando Pokémon...
      </h1>
    );
  }

  if (error) {

    return (
      <h1 className="status">
        Erro ao carregar Pokémon
      </h1>
    );
  }

  return (

    <div className={`pokemon-bg ${pokemons.types[0].type.name}-bg`}>

      <div className={`pokemon-card ${pokemons.types[0].type.name}`}>

        <img
          src={pokemons.sprites.front_default}
          alt={pokemons.name}
        />

        <h1>{pokemons.name}</h1>

        <div className="pokemon-info">

          <div className="poke-box">
            <span>Tipo</span>
            <h3>{pokemons.types[0].type.name}</h3>
          </div>

          <div className="poke-box">
            <span>HP</span>
            <h3>{pokemons.stats[0].base_stat}</h3>
          </div>

          <div className="poke-box">
            <span>Ataque</span>
            <h3>{pokemons.stats[1].base_stat}</h3>
          </div>

          <div className="poke-box">
            <span>Velocidade</span>
            <h3>{pokemons.stats[5].base_stat}</h3>
          </div>

        </div>

        <Link to="/">
          <button className="back-btn">
            Voltar
          </button>
        </Link>

      </div>

    </div>

  );
}

export default Pokemon;