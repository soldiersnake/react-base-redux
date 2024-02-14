import { failedFetch, fetchPokemons, loadingPokemons } from "../reducers/pokemonSlice";

export const getPokemons = (page = 0) => {
    const urlBase = 'https://pokeapi.co/api/v2/';
    
    return async (dispatch) => {
        dispatch(loadingPokemons());

        //llamada a la api para optener los datos
        try {
            //colocar los datos en el state: fetchPokemons
            const response = await fetch(`${urlBase}pokemon?limit=10&offset=${page * 10}`);
            const data = await response.json();
            //colocar los datos en el state y hacer el dispatch de la accion
            dispatch(fetchPokemons( {pokemons: data.results, page: page + 1} ));

        } catch (error) {
            //en caso de que falle ejercutar la accion con el mensaje
            dispatch(failedFetch( {error: error.message} ))
        }

    }
};