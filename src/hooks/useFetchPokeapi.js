import { useState, useEffect } from "react";

import axios from "axios";

function useFetchPokeapi(pokemon) {

  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {

      try {

        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

        setPokemons(res.data);

        setLoading(false);

      } catch (err) {

        console.error(err);

        setError(true);

        setLoading(false);
      }
    };

    getData();

  }, [pokemon]);

  return {
    pokemons,
    loading,
    error
  };
}

export default useFetchPokeapi;