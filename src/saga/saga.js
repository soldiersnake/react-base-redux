import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { failedFetch, fetchPokemons, loadingPokemons } from '../reducers/pokemonSlice';

//servicio para traer datos de API (deberia de estar en carpeta aparte)
const urlBase = 'https://pokeapi.co/api/v2/';
const fechingPokemons = async (page = 0) => {
    const response = await fetch(`${urlBase}pokemon?limit=10&offset=${page * 10}`)
    const data = response.json();
    return data;
};
//generacion de SAGA
//cuando la funcion lleva * se lo denimina funcion generadora
function* getPokemons(action){
    const page = action.payload;
    try {
        yield put(loadingPokemons());
        //optener datos de api y colocar en el state
        const data = yield call(fechingPokemons, page);
        //guardar los datos si son exitosos
        yield put(fetchPokemons({pokemons: data.results, page: page}));
    } catch (error) {
        yield put(failedFetch({error: error.message}));
    }
};
// saga principal par aobservar la accion de getPokemons
function* watchGetPokemons() {
    yield takeEvery('pokemon/fechingPokemons', getPokemons)
};

export default watchGetPokemons;