import { AppState } from '../store';

export const characterSelector = (appState: AppState) =>
  appState.characters?.characters;
  export const loadingSelector = (appState: AppState) =>
  appState.characters?.loading;
  export const character_one_Selector = (appState: AppState) =>
  appState.characters?.characters_one;
  export const character_two_Selector = (appState: AppState) =>
  appState.characters?.characters_two;