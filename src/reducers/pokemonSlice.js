import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false,
    error: null,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers:{
        loadingPokemons: (state) => {
            state.isLoading = true;
        },
        fetchPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        failedFetch: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
    }
});

export const { loadingPokemons, fetchPokemons, failedFetch } = pokemonSlice.actions;

export const fetchingPokemons = createAction('pokemon/fechingPokemons');