import { CharactersReducerState } from './index';
import { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../models/Character';

export const setCharactersListAction = (
  state: CharactersReducerState,
  action: PayloadAction<Character[]>
): CharactersReducerState => ({
  ...state,
  characters: action.payload,
  isFetchingCharacters: false
});

export const addNewCharacterAction = (
  state: CharactersReducerState,
  action: PayloadAction<Character>
): CharactersReducerState => ({
  ...state,
  characters: state.characters.concat(action.payload)
});

export const deleteCharacterAction = (
  state: CharactersReducerState,
  action: PayloadAction<number>
): CharactersReducerState => ({
  ...state,
  characters: state.characters.filter((c) => c.id !== action.payload)
});