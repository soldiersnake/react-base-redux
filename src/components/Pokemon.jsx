import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../thunk/thunk";

export const Pokemon = () => {
  const {
    isLoading,
    pokemons = [],
    page,
    error,
  } = useSelector((state) => state.pokemons);
  console.log({ isLoading, pokemons, page, error });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      {error && <p>Algo a salido mal...</p>}
      {isLoading && <p>Cargando...</p>}
      <div>
        {pokemons.map((poke) => (
          <p key={poke.name}>{poke.name}</p>
        ))}
      </div>
      {
        page > 1 && 
        <button onClick={() => dispatch(getPokemons(page - 2))}>Prev Page</button>
      }
      <button onClick={() => dispatch(getPokemons(page))}>Next Page</button>
    </>
  );
};
