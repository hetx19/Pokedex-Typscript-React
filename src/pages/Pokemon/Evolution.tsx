import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { genericPokemonType } from "../../utils/types";
import PokemonCardGrid from "../../components/PokemonCardGrid";
import { getPokemonsData } from "../../app/reducers/getPokemonsData";

function Evolution() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons: genericPokemonType[] =
        pokemonData.currentPokemon!.evolution.map(
          ({ pokemon }: { pokemon: genericPokemonType }) => pokemon
        );
      await dispatch(getPokemonsData(pokemons));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, pokemonData.currentPokemon]);

  return (
    <div className="page">
      {isLoaded ? (
        <PokemonCardGrid pokemons={pokemonData.randomPokemons!} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Evolution;
