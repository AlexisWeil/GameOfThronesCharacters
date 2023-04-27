import { Character, CharacterAPI, parseCharacterAPI } from '../../models/Character';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCharacterAction, deleteCharacterAction, setCharactersListAction } from './actions';
import axios, { AxiosError } from 'axios';


export interface CharactersReducerState {
  characters: Character[],
  isFetchingCharacters: boolean,
  fetchingError?: string
}

const initialState: CharactersReducerState = {
  characters: [],
  isFetchingCharacters: false
};

export const fetchCharacters = createAsyncThunk(
  'tasks/fetchCharacters',
  () =>
    axios.get<CharacterAPI[]>('https://thronesapi.com/api/v2/Characters')
      .then((res) =>
        res.data.map(parseCharacterAPI)
      )
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    setCharactersList: setCharactersListAction,
    addNewCharacter: addNewCharacterAction,
    deleteCharacter: deleteCharacterAction
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCharacters.pending,
      (state) => ({ ...state, isFetchingCharacters: true })
    );

    builder.addCase(
      fetchCharacters.fulfilled,
      setCharactersListAction
    );

    builder.addCase(
      fetchCharacters.rejected,
      (state, action) => ({
        ...state,
        characters: [],
        isFetchingCharacters: false,
        fetchingError: 'Error while fetching characters'
      })
    );
  }
});

export const { setCharactersList, deleteCharacter, addNewCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;