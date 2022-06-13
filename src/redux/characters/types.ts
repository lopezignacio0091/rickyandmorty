export const GET_CHARACTERS = "@@CHARACTERS/GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "@@CHARACTERS/GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "@@CHARACTERS/GET_CHARACTERS_ERROR";
export const SET_LOADING = "@@CHARACTERS/SET_LOADING";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
}

interface Error {
  name: string;
  message: string;
  stack?: string;
}

export interface CharacterState {
  loading: boolean;
  characters: Character[];
  error: string;
  characters_one:Character[];
  characters_two:Character[];
}

export interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
}

export interface GetCharactersActionSuccessAction {
  type: typeof GET_CHARACTERS_SUCCESS;
  payload: Character[];
}

export interface GetCharactersActionFailureAction {
  type: typeof GET_CHARACTERS_ERROR;
  payload: Error;
}

export interface SetLoading{
  type:typeof SET_LOADING
}

export type CharacterActions =
  | GetCharactersAction
  | GetCharactersActionSuccessAction
  | GetCharactersActionFailureAction
  | SetLoading;
